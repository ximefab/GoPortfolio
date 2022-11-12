package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Comments struct {
	Id      primitive.ObjectID `json:"_id" bson:"_id"`
	UserId  primitive.ObjectID `json:"userId" validate:"required"`
	PostId  primitive.ObjectID `json:"postId" validate:"-"`
	Comment string             `json:"comment" validate:"required"`
	Date    string             `json:"date" validate:"-"`
}
