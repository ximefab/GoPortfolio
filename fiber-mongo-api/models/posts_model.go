package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Post struct {
	Id       primitive.ObjectID `json:"_id" bson:"_id"`
	Date     string             `json:"date" validate:"-"`
	VideoUrl string             `json:"videoUrl"`
	PhotoUrl string             `json:"photoUrl"`
}
