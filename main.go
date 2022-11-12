package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/ximefab/GoPortfolio/fiber-mongo-api/configs"
	"github.com/ximefab/GoPortfolio/fiber-mongo-api/routes"
)

func main() {
	app := fiber.New()

	//run database
	configs.ConnectDB()

	//routes
	routes.UserRoute(app)

    

	app.Listen(":3001")
}
