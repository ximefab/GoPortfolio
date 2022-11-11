package main

import (
	"github.com/ximefab/GoPortfolio/fiber-mongo-api/configs"
	"github.com/ximefab/GoPortfolio/fiber-mongo-api/routes"
    "github.com/gofiber/fiber/v2"
	
)

func main() {
    app := fiber.New()
  
    app.Get("/", func(c *fiber.Ctx) error {
        return c.JSON(&fiber.Map{"data": "Hello from Fiber & mongoDB"})
    })

	//routes
    routes.UserRoute(app) //add this
  
    app.Listen(":6000")
}