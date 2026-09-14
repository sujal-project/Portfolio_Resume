package models

import "time"

// Project is a portfolio project shown on the site.
type Project struct {
	ID          string   `json:"id"`
	Title       string   `json:"title"`
	TitleJa     string   `json:"title_ja"`
	Period      string   `json:"period"`
	Summary     string   `json:"summary"`
	SummaryJa   string   `json:"summary_ja"`
	Stack       []string `json:"stack"`
	RepoURL     string   `json:"repo_url"`
	Highlights  []string `json:"highlights"`
	HighlightsJ []string `json:"highlights_ja"`
}

// SkillGroup buckets related skills for display.
type SkillGroup struct {
	Category   string   `json:"category"`
	CategoryJa string   `json:"category_ja"`
	Items      []string `json:"items"`
}

// ContactMessage is a message submitted through the contact form.
type ContactMessage struct {
	ID        int64     `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	Message   string    `json:"message"`
	CreatedAt time.Time `json:"created_at"`
}
