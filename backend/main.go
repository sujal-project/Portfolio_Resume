package main

import (
	"database/sql"
	"log"
	"os"
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/sujal-project/portfolio-backend/internal/db"
	"github.com/sujal-project/portfolio-backend/internal/handlers"
)

func main() {
	port := getenv("PORT", "8080")
	dsn := os.Getenv("DATABASE_URL")
	allowedOrigins := strings.Split(getenv("ALLOWED_ORIGINS", "http://localhost:3000"), ",")

	var conn *sql.DB
	if dsn != "" {
		c, err := db.Connect(dsn)
		if err != nil {
			// Don't crash the whole API if the DB is briefly unreachable;
			// the contact form will just log instead of persisting until it's back.
			log.Printf("warning: database unavailable, contact form will not persist: %v", err)
		} else {
			conn = c
			defer conn.Close()
		}
	} else {
		log.Println("DATABASE_URL not set, running without persistence")
	}

	api := &handlers.API{DB: conn}

	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     allowedOrigins,
		AllowMethods:     []string{"GET", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		AllowCredentials: false,
	}))

	apiGroup := router.Group("/api")
	{
		apiGroup.GET("/health", api.Health)
		apiGroup.GET("/projects", api.Projects)
		apiGroup.GET("/skills", api.Skills)
		apiGroup.POST("/contact", api.Contact)
	}

	log.Printf("listening on :%s", port)
	if err := router.Run(":" + port); err != nil {
		log.Fatal(err)
	}
}

func getenv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
