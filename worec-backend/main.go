package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

//-----------
// Handlers
//-----------

// firestore poc

//func updateStartTime(c echo.Context) error {
//
//}

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

	// POST start time
	//e.POST("/start")
	// POST rest time
	// POST rest-finish time
	// POST leave time
	// POST register client
	// POST modify timecard

	e.Logger.Fatal(e.Start(":1323"))
}
