package main

import (
    _"./database"
    _"./routes"
    "github.com/gofiber/fiber/v2"
)

func main() {

    database.Connect()

    app := fiber.New()

    routes.Setup(app)

    app.Listen(":3000")
}


//Maikayla!