package routes

import (
	_"../controllers"

	"github.com/gofiber/fiber/v2"
	)

func Setup(app *fiber.App) {

	app.Get("/", controllers.Hello)
}