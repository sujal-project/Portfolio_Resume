package db

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

// Connect opens a Postgres connection pool and ensures the schema exists.
// dsn example: postgres://user:password@host:5432/dbname?sslmode=require
func Connect(dsn string) (*sql.DB, error) {
	conn, err := sql.Open("postgres", dsn)
	if err != nil {
		return nil, fmt.Errorf("open db: %w", err)
	}
	if err := conn.Ping(); err != nil {
		return nil, fmt.Errorf("ping db: %w", err)
	}
	if err := migrate(conn); err != nil {
		return nil, fmt.Errorf("migrate: %w", err)
	}
	log.Println("connected to postgres and ensured schema")
	return conn, nil
}

func migrate(conn *sql.DB) error {
	const schema = `
	CREATE TABLE IF NOT EXISTS contact_messages (
		id SERIAL PRIMARY KEY,
		name TEXT NOT NULL,
		email TEXT NOT NULL,
		message TEXT NOT NULL,
		created_at TIMESTAMPTZ NOT NULL DEFAULT now()
	);`
	_, err := conn.Exec(schema)
	return err
}
