package routes

import (
	"github.com/ximefab/GoPortfolio/controllers"

	"github.com/gofiber/fiber/v2"
	)

func Setup(app *fiber.App) {

	app.Get("/", controllers.Hello)
}