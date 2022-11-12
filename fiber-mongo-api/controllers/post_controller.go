package controllers

import (
	"context"
	"log"
	"net/http"
	"time"

	"github.com/fiber-mongo-api/configs"
	"github.com/fiber-mongo-api/models"
	"github.com/fiber-mongo-api/responses"
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var postCollection *mongo.Collection = configs.GetCollection(configs.DB, "posts")
var commentsCollection *mongo.Collection = configs.GetCollection(configs.DB, "comments")
var postValidator = validator.New()

func CreatePost(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var post models.Post
	defer cancel()

	//validate the request body
	if err := c.BodyParser(&post); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	//use the validator library to validate required fields
	if validationErr := postValidator.Struct(&post); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
	}

	newPost := models.Post{
		Id:       primitive.NewObjectID(),
		VideoUrl: post.VideoUrl,
		PhotoUrl: post.PhotoUrl,
		Date:     time.Now().String(),
	}

	result, err := postCollection.InsertOne(ctx, newPost)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	return c.Status(http.StatusCreated).JSON(responses.UserResponse{Status: http.StatusCreated, Message: "success", Data: &fiber.Map{"data": result}})
}

func AddCommentToPost(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	postId := c.Params("id")
	var post models.Post
	var user models.User
	var comment models.Comments
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(postId)

	err := postCollection.FindOne(ctx, bson.M{"_id": objId}).Decode(&post)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "Post id provided is not valid", Data: &fiber.Map{"data": err.Error()}})
	}

	//validate the request body
	if err := c.BodyParser(&comment); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	//use the validator library to validate required fields
	if validationErr := postValidator.Struct(&comment); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
	}

	userObjId, _ := primitive.ObjectIDFromHex(comment.UserId.Hex())
	newErr := userCollection.FindOne(ctx, bson.M{"_id": userObjId}).Decode(&user)
	if newErr != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "User id provided is not valid", Data: &fiber.Map{"data": newErr.Error()}})
	}

	newComment := models.Comments{
		Id:      primitive.NewObjectID(),
		PostId:  objId,
		UserId:  comment.UserId,
		Comment: comment.Comment,
		Date:    time.Now().String(),
	}

	result, err := commentsCollection.InsertOne(ctx, newComment)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	return c.JSON(&fiber.Map{"data": result})
}

func GetCommentOfPost(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	postId := c.Params("id")
	var comments []models.Comments
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(postId)

	result, err := commentsCollection.Find(ctx, bson.M{"postid": objId})
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "Post id provided is not valid", Data: &fiber.Map{"data": err.Error()}})
	}

	//reading from the db in an optimal way
	defer result.Close(ctx)
	for result.Next(ctx) {
		var singleComment models.Comments
		if err = result.Decode(&singleComment); err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
		}
		comments = append(comments, singleComment)
	}

	return c.JSON(comments)
}

func GetAPost(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	postId := c.Params("id")
	var post models.Post
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(postId)

	err := postCollection.FindOne(ctx, bson.M{"_id": objId}).Decode(&post)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	return c.JSON(post)
}

func EditAPost(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	postId := c.Params("id")
	var post models.Post
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(postId)

	//validate the request body
	if err := c.BodyParser(&post); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	//use the validator library to validate required fields
	if validationErr := validate.Struct(&post); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
	}

	update := bson.M{"videoUrl": post.VideoUrl}

	result, err := postCollection.UpdateOne(ctx, bson.M{"_id": objId}, bson.M{"$set": update})
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	//get updated post details
	var updatedPost models.Post
	if result.MatchedCount == 1 {
		err := postCollection.FindOne(ctx, bson.M{"_id": objId}).Decode(&updatedPost)
		if err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
		}
	}

	return c.JSON(updatedPost)
}

func DeleteAPost(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	postId := c.Params("id")
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(postId)

	result, err := postCollection.DeleteOne(ctx, bson.M{"id": objId})
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if result.DeletedCount < 1 {
		return c.Status(http.StatusNotFound).JSON(
			responses.UserResponse{Status: http.StatusNotFound, Message: "error", Data: &fiber.Map{"data": "Post with specified ID not found!"}},
		)
	}

	return c.JSON(responses.UserResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": "Post successfully deleted!"}})
}

func DeleteAComment(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	commentId := c.Params("id")
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(commentId)

	result, err := commentsCollection.DeleteOne(ctx, bson.M{"_id": objId})
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if result.DeletedCount < 1 {
		return c.Status(http.StatusNotFound).JSON(
			responses.UserResponse{Status: http.StatusNotFound, Message: "error", Data: &fiber.Map{"data": "Post with specified ID not found!"}},
		)
	}

	return c.JSON(responses.UserResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": "Comment successfully deleted!"}})
}

func GetAllPosts(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var posts []models.Post
	defer cancel()

	results, err := postCollection.Find(ctx, bson.M{})
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if err = results.All(ctx, &posts); err != nil {
		log.Fatal(err)
	}

	//reading from the db in an optimal way
	defer results.Close(ctx)
	for results.Next(ctx) {
		var singlePost models.Post
		if err = results.Decode(&singlePost); err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
		}
		posts = append(posts, singlePost)
	}

	return c.JSON(posts)
}
