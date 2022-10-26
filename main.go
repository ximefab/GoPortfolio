package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)


func main() {

    //connecting the database
    client, err := mongo.NewClient(options.Client().ApplyURI("mongodb+srv://root:rootroot@cluster0.b9lboem.mongodb.net/401db?retryWrites=true&w=majority"))
	
    //handling errors
    if err != nil {
		log.Fatal(err)
	}
    //after 10 seconds the session will be closed
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	//establishing connection error
    err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
    //disconnection
	defer client.Disconnect(ctx)

    //ping / errors
    err = client.Ping(ctx, readpref.Primary())
    if err != nil {
        log.Fatal(err)
    }

    databases, err := client.ListDatabaseNames(ctx, bson.M{})
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(databases)

}//end main func


//Maikayla!