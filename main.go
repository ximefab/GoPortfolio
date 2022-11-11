package main

import (
	"github.com/ximefab/GoPortfolio/fiber-mongo-api/configs"
	"github.com/ximefab/GoPortfolio/fiber-mongo-api/routes"
    "github.com/gofiber/fiber/v2"
	
)

func main() {
    app := fiber.New()
  
    //run database
    configs.ConnectDB()
    
	//routes
    routes.UserRoute(app) //add this
  
    app.Listen(":6000")
}