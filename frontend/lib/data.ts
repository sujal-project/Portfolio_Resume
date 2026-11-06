export interface Project {
  id: string;
  title: string;
  title_ja: string;
  period: string;
  summary: string;
  summary_ja: string;
  stack: string[];
  repo_url: string;
  highlights: string[];
  highlights_ja: string[];
}

export interface SkillGroup {
  category: string;
  category_ja: string;
  items: string[];
}

// Fallback content, used if NEXT_PUBLIC_API_URL is unset or the API is
// unreachable, so the site never shows an empty page. Keep this in sync
// with backend/internal/handlers/handlers.go.

export const fallbackProjects: Project[] = [
  {
    id: "nexhireai",
    title: "NexHireAI — AI-Driven SaaS Hiring Platform for me",
    title_ja: "NexHireAI — AI駆動型SaaS採用プラットフォーム",
    period: "April 2026 – May 2026",
    summary:
      "Parses messy, unformatted resume PDFs to pull out structured skill data — turning a manual screening job that used to take days into something that runs in minutes.",
    summary_ja:
      "整形されていない履歴書PDFを解析し、構造化されたスキルデータを抽出。以前は数日かかっていた手作業の書類選考を数分で終わらせます。",
    stack: ["Python", "Flask", "SQL Server", "scikit-learn", "spaCy", "Pandas"],
    repo_url: "https://github.com/sujal-project/NexHireAI",
    highlights: [
      "Five layers — UI, Flask routes, the AI/matching engine, a pyodbc data-access layer, and SQL Server itself — so the resume-parsing logic isn't tangled up with the web code",
      "Matching logic built with scikit-learn and Pandas scores each candidate against a job posting on a 0-100% scale, improving match quality 35% over doing it manually",
      "Flask-Login accounts for recruiters and applicants, plus a Chart.js dashboard so recruiters see hiring metrics instead of digging through a spreadsheet",
    ],
    highlights_ja: [
      "UI・Flaskルーティング・AI/マッチングエンジン・pyodbcデータアクセス層・SQL Server本体の5層構成にし、履歴書解析ロジックとWebコードを分離",
      "scikit-learnとPandasによるマッチングロジックが候補者を求人に対し0〜100%でスコアリングし、手作業比でマッチ精度を35%向上",
      "採用担当者・応募者向けのFlask-Loginアカウントと、スプレッドシートを見なくて済むChart.js製採用指標ダッシュボード",
    ],
  },
  {
    id: "srms",
    title: "Student Result Management System (SRMS)",
    title_ja: "学生成績管理システム（SRMS）",
    period: "September 2025 – December 2025",
    summary:
      "Replaced a paperwork-based grading process with a Spring Boot app, using Spring Data JPA/Hibernate instead of handwriting SQL for every CRUD operation.",
    summary_ja:
      "紙ベースの成績処理をSpring Bootアプリに置き換え、CRUD操作ごとにSQLを手書きする代わりにSpring Data JPA/Hibernateを使用。",
    stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Chart.js"],
    repo_url: "https://github.com/sujal-project/StudentResult-Management-System",
    highlights: [
      "Four layers — Thymeleaf/Bootstrap UI, Spring MVC controllers, JPA data access, MySQL — so UI work and database logic don't step on each other",
      "Grade-entry forms built with Thymeleaf, plus a Chart.js dashboard showing grade distribution live instead of admins pulling reports manually",
      "Fallback handling so the dashboard doesn't break on a completely empty or fresh database, preventing template errors on first-time setup",
    ],
    highlights_ja: [
      "Thymeleaf/Bootstrap UI・Spring MVCコントローラー・JPAデータアクセス・MySQLの4層構成にし、UI開発とDBロジックが干渉しない設計に",
      "Thymeleafで成績入力フォームを作成し、管理者が手動でレポートを出す代わりにChart.jsダッシュボードで成績分布をリアルタイム表示",
      "データが完全に空の初回セットアップ時でもダッシュボードがテンプレートエラーを起こさないようフォールバック処理を実装",
    ],
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    title_ja: "このポートフォリオ",
    period: "September 2026",
    summary:
      "This site itself: a Next.js + Go REST API portfolio, containerized and running on free-tier infrastructure.",
    summary_ja: "本サイト自体：Next.jsとGo製REST APIによるポートフォリオ。Docker化し無料枠のインフラで稼働。",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Go", "Gin", "PostgreSQL", "Docker"],
    repo_url: "",
    highlights: [
      "Next.js/TypeScript frontend with an English/Japanese language toggle",
      "Go + Gin REST API serving project and skill data, and storing contact messages in PostgreSQL",
      "Fully containerized with Docker Compose for local dev and free-tier deployment",
    ],
    highlights_ja: [
      "英語/日本語の切り替えに対応したNext.js/TypeScript製フロントエンド",
      "プロジェクト・スキル情報を返し、問い合わせをPostgreSQLに保存するGo+Gin製REST API",
      "Docker Composeで完全にコンテナ化し、ローカル開発と無料枠デプロイの両方に対応",
    ],
  },
];

export const fallbackSkills: SkillGroup[] = [
  {
    category: "Programming Languages",
    category_ja: "プログラミング言語",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C / C++", "Go"],
  },
  {
    category: "Frameworks & Web",
    category_ja: "フレームワーク・Web",
    items: ["Flask", "Flask-Login", "FastAPI", "Spring Boot", "Bootstrap", "HTML5", "CSS3", "Chart.js", "Next.js", "Tailwind CSS", "Gin"],
  },
  {
    category: "Databases & Tools",
    category_ja: "データベース・ツール",
    items: ["Microsoft SQL Server", "MySQL", "SQLite3", "PostgreSQL", "Git", "GitHub", "Pyodbc"],
  },
  {
    category: "Cloud & DevOps",
    category_ja: "クラウド・DevOps",
    items: ["AWS (EC2/S3)", "Docker", "Redis", "CI/CD (GitHub Actions)"],
  },
  {
    category: "AI/ML & NLP",
    category_ja: "AI・機械学習・NLP",
    items: ["scikit-learn", "spaCy", "Pandas", "NumPy", "PyPDF2"],
  },
  {
    category: "Generative AI Tools",
    category_ja: "生成AIツール",
    items: ["Claude Code", "ChatGPT", "Gemini"],
  },
  {
    category: "Languages Spoken",
    category_ja: "話せる言語",
    items: ["English (Professional)", "Hindi (Native)", "Marathi (Native)", "Japanese (Beginner)"],
  },
];
