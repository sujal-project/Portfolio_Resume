package handlers

import (
	"database/sql"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sujal-project/portfolio-backend/internal/models"
)

// API holds shared dependencies for handlers.
type API struct {
	DB *sql.DB // may be nil in local/demo mode; contact form logs instead of storing
}

func (a *API) Health(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"status": "ok"})
}

func (a *API) Projects(c *gin.Context) {
	c.JSON(http.StatusOK, projects)
}

func (a *API) Skills(c *gin.Context) {
	c.JSON(http.StatusOK, skills)
}

type contactRequest struct {
	Name    string `json:"name" binding:"required,max=100"`
	Email   string `json:"email" binding:"required,email"`
	Message string `json:"message" binding:"required,max=2000"`
}

func (a *API) Contact(c *gin.Context) {
	var req contactRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid submission", "detail": err.Error()})
		return
	}

	if a.DB != nil {
		_, err := a.DB.Exec(
			`INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)`,
			req.Name, req.Email, req.Message,
		)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save message"})
			return
		}
	}

	c.JSON(http.StatusCreated, gin.H{"status": "received"})
}

// Static content: for a portfolio site this data changes rarely, so it lives
// in code rather than requiring an admin panel. Move to the DB later if it
// needs to change often.

var skills = []models.SkillGroup{
	{Category: "Programming Languages", CategoryJa: "プログラミング言語", Items: []string{"Python", "Java", "JavaScript", "TypeScript", "C / C++", "Go"}},
	{Category: "Frameworks & Web", CategoryJa: "フレームワーク・Web", Items: []string{"Flask", "Flask-Login", "FastAPI", "Spring Boot", "Bootstrap", "HTML5", "CSS3", "Chart.js", "Next.js", "Tailwind CSS", "Gin"}},
	{Category: "Databases & Tools", CategoryJa: "データベース・ツール", Items: []string{"Microsoft SQL Server", "MySQL", "SQLite3", "PostgreSQL", "Git", "GitHub", "Pyodbc"}},
	{Category: "Cloud & DevOps", CategoryJa: "クラウド・DevOps", Items: []string{"AWS (EC2/S3)", "Docker", "Redis", "CI/CD (GitHub Actions)"}},
	{Category: "AI/ML & NLP", CategoryJa: "AI・機械学習・NLP", Items: []string{"scikit-learn", "spaCy", "Pandas", "NumPy", "PyPDF2"}},
	{Category: "Generative AI Tools", CategoryJa: "生成AIツール", Items: []string{"Claude Code", "ChatGPT", "Gemini"}},
	{Category: "Languages Spoken", CategoryJa: "話せる言語", Items: []string{"English (Professional)", "Hindi (Native)", "Marathi (Native)"}},
}






var projects = []models.Project{

	// 	{
	// 	ID:        "jarvis",
	// 	Title:     "Jarvis — AI-Driven SaaS Hiring Platform",
	// 	TitleJa:   "NexHireAI — AI駆動のSaaS採用プラットフォーム",
	// 	Period:    "April 2026 – May 2026",
	// 	Summary:   "Parses messy, unformatted resume PDFs to pull out structured skill data and score candidates against a job posting.",
	// 	SummaryJa: "書式の整っていない履歴書PDFを解析して構造化されたスキルデータを抽出し、求人に対して候補者をスコアリングする。",
	// 	Stack:     []string{"Python", "Flask", "MS SQL Server", "scikit-learn", "spaCy", "Pandas"},
	// 	RepoURL:   "https://github.com/sujal-project/NexHireAI",
	// 	Highlights: []string{
	// 		"Parsed messy, unformatted resume PDFs with spaCy and PyPDF2 to pull out structured skill data — turned a manual screening job that used to take days into something that runs in minutes",
	// 		"Split the app into five layers (UI, Flask routes, the AI/matching engine, a pyodbc data-access layer, and SQL Server itself) so the resume-parsing logic wasn't tangled up with the web code",
	// 		"Built the matching logic with scikit-learn and Pandas — scores each candidate against a job posting on a 0-100% scale, and got match quality up 35% over doing it manually",
	// 		"Added Flask-Login for recruiter/applicant accounts and a Chart.js dashboard so recruiters can see hiring metrics instead of digging through a spreadsheet",
	// 	},
	// 	HighlightsJ: []string{
	// 		"spaCyとPyPDF2で書式の乱れた履歴書PDFを解析し構造化データを抽出。数日かかっていた選考作業を数分で完了できるようにした",
	// 		"UI・Flaskルーティング・AI/マッチングエンジン・pyodbcデータアクセス層・SQL Serverの5層に分割し、履歴書解析ロジックとWebコードを分離",
	// 		"scikit-learnとPandasでマッチングロジックを構築。候補者を求人に対し0〜100%でスコアリングし、手動選考に比べマッチ精度を35%向上",
	// 		"採用担当者・応募者向けにFlask-Loginでアカウント管理を実装し、Chart.jsダッシュボードで採用指標を可視化",
	// 	},
	// },


	{
		ID:        "nexhireai",
		Title:     "NexHireAI — AI-Driven SaaS Hiring Platform",
		TitleJa:   "NexHireAI — AI駆動のSaaS採用プラットフォーム",
		Period:    "April 2026 – May 2026",
		Summary:   "Parses messy, unformatted resume PDFs to pull out structured skill data and score candidates against a job posting.",
		SummaryJa: "書式の整っていない履歴書PDFを解析して構造化されたスキルデータを抽出し、求人に対して候補者をスコアリングする。",
		Stack:     []string{"Python", "Flask", "MS SQL Server", "scikit-learn", "spaCy", "Pandas"},
		RepoURL:   "https://github.com/sujal-project/NexHireAI",
		Highlights: []string{
			"Parsed messy, unformatted resume PDFs with spaCy and PyPDF2 to pull out structured skill data — turned a manual screening job that used to take days into something that runs in minutes",
			"Split the app into five layers (UI, Flask routes, the AI/matching engine, a pyodbc data-access layer, and SQL Server itself) so the resume-parsing logic wasn't tangled up with the web code",
			"Built the matching logic with scikit-learn and Pandas — scores each candidate against a job posting on a 0-100% scale, and got match quality up 35% over doing it manually",
			"Added Flask-Login for recruiter/applicant accounts and a Chart.js dashboard so recruiters can see hiring metrics instead of digging through a spreadsheet",
		},
		HighlightsJ: []string{
			"spaCyとPyPDF2で書式の乱れた履歴書PDFを解析し構造化データを抽出。数日かかっていた選考作業を数分で完了できるようにした",
			"UI・Flaskルーティング・AI/マッチングエンジン・pyodbcデータアクセス層・SQL Serverの5層に分割し、履歴書解析ロジックとWebコードを分離",
			"scikit-learnとPandasでマッチングロジックを構築。候補者を求人に対し0〜100%でスコアリングし、手動選考に比べマッチ精度を35%向上",
			"採用担当者・応募者向けにFlask-Loginでアカウント管理を実装し、Chart.jsダッシュボードで採用指標を可視化",
		},
	},
	{
		ID:        "srms",
		Title:     "Student Result Management System (SRMS)",
		TitleJa:   "学生成績管理システム（SRMS）",
		Period:    "September 2025 – December 2025",
		Summary:   "Replaced a paperwork-based grading process with a Spring Boot application.",
		SummaryJa: "紙ベースの成績処理をSpring Bootアプリケーションに置き換えた。",
		Stack:     []string{"Java", "Spring Boot", "Thymeleaf", "MySQL", "Chart.js"},
		RepoURL:   "https://github.com/sujal-project/StudentResult-Management-System",
		Highlights: []string{
			"Replaced a paperwork-based grading process with a Spring Boot app, using Spring Data JPA/Hibernate instead of handwriting SQL for every CRUD operation against MySQL",
			"Kept things in four layers (Thymeleaf/Bootstrap UI, Spring MVC controllers, JPA data access, MySQL) so the UI and database logic didn't step on each other",
			"Built the grade-entry forms with Thymeleaf and a Chart.js dashboard that shows grade distribution live instead of admins pulling reports manually",
			"Added fallback handling so the dashboard doesn't break on a completely empty or fresh database, preventing template errors on first-time setup",
		},
		HighlightsJ: []string{
			"紙ベースの成績処理をSpring Bootアプリに置き換え、MySQLへのCRUD操作をSQL手書きではなくSpring Data JPA/Hibernateで実装",
			"Thymeleaf/Bootstrap UI・Spring MVCコントローラー・JPAデータアクセス・MySQLの4層構成にし、UIとDB処理が干渉しないようにした",
			"Thymeleafで成績入力フォームを作成し、Chart.jsダッシュボードで成績分布をリアルタイム表示",
			"データベースが空の初期状態でもテンプレートエラーが起きないようフォールバック処理を追加",
		},
	},
	{
		ID:        "portfolio",
		Title:     "This Portfolio",
		TitleJa:   "このポートフォリオ",
		Period:    "September 2026",
		Summary:   "This site itself: a Next.js + Go REST API portfolio, containerized and running on free-tier infrastructure.",
		SummaryJa: "本サイト自体：Next.jsとGo製REST APIによるポートフォリオ。Docker化し無料枠のインフラで稼働。",
		Stack:     []string{"TypeScript", "Next.js", "Tailwind CSS", "Go", "Gin", "PostgreSQL", "Docker","Vercel (frontend)","Render (backend)","neon (database)"},
		RepoURL:   "https://github.com/sujal-project/Portfolio_Resume.git",
		Highlights: []string{
			"Next.js/TypeScript frontend with an English/Japanese language toggle",
			"Go + Gin REST API serving project and skill data, and storing contact messages in PostgreSQL",
			"Fully containerized with Docker Compose for local dev and free-tier deployment",
		},
		HighlightsJ: []string{
			"英語/日本語の切り替えに対応したNext.js/TypeScript製フロントエンド",
			"プロジェクト・スキル情報を返し、問い合わせをPostgreSQLに保存するGo+Gin製REST API",
			"Docker Composeで完全にコンテナ化し、ローカル開発と無料枠デプロイの両方に対応",
		},
	},
}

// var skills = []models.SkillGroup{
// 	{Category: "Programming Languages", CategoryJa: "プログラミング言語", Items: []string{"Python", "Java", "JavaScript", "TypeScript", "C / C++", "Go"}},
// 	{Category: "Frameworks & Web", CategoryJa: "フレームワーク・Web", Items: []string{"Flask", "Flask-Login", "FastAPI", "Spring Boot", "Bootstrap", "HTML5", "CSS3", "Chart.js", "Next.js", "Tailwind CSS", "Gin"}},
// 	{Category: "Databases & Tools", CategoryJa: "データベース・ツール", Items: []string{"Microsoft SQL Server", "MySQL", "SQLite3", "PostgreSQL", "Git", "GitHub", "Pyodbc"}},
// 	{Category: "Cloud & DevOps", CategoryJa: "クラウド・DevOps", Items: []string{"AWS (EC2/S3)", "Docker", "Redis", "CI/CD (GitHub Actions)"}},
// 	{Category: "AI/ML & NLP", CategoryJa: "AI・機械学習・NLP", Items: []string{"scikit-learn", "spaCy", "Pandas", "NumPy", "PyPDF2"}},
// 	{Category: "Generative AI Tools", CategoryJa: "生成AIツール", Items: []string{"Claude Code", "ChatGPT", "Gemini"}},
// 	{Category: "Languages Spoken", CategoryJa: "話せる言語", Items: []string{"English (Professional)", "Hindi (Native)", "Marathi (Native)"}},
// }
