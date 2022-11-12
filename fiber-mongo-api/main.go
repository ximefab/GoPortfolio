package main

import (
	"github.com/fiber-mongo-api/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(&fiber.Map{"data": "Hello from Fiber & mongoDB"})
	})

	//routes
	routes.UserRoute(app)  // user routes
	routes.PostsRoute(app) // posts route

	app.Listen(":6000")
}
