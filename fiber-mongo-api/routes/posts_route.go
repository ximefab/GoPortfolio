package routes

import (
	"github.com/fiber-mongo-api/controllers"
	"github.com/gofiber/fiber/v2"
)

func PostsRoute(app *fiber.App) {
	app.Post("/post", controllers.CreatePost)
	app.Get("/post/:id", controllers.GetAPost)
	app.Put("/post/:id", controllers.EditAPost)
	app.Delete("/post/:id", controllers.DeleteAPost)
	app.Get("/posts", controllers.GetAllPosts)
	app.Post("/post/:id/comment", controllers.AddCommentToPost)
	app.Get("/post/:id/comments", controllers.GetCommentOfPost)
	app.Delete("/comments/:id", controllers.DeleteAComment)
}
