package main

import (
    "github.com/ximefab/GoPortfolio/database"
    "github.com/ximefab/GoPortfolio/routes"
    "github.com/gofiber/fiber/v2"
)

func main() {

    database.Connect()

    app := fiber.New()

    routes.Setup(app)

    app.Listen(":3000")
}


//Maikayla!