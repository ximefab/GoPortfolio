package main

import (
	"fibr/fiber-mongo-api/configs"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	//run database
	configs.ConnectDB()

	app.Listen(":6000")
}
