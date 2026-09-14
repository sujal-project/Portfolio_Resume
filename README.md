# Sujal Gaikwad — Portfolio

Full-stack portfolio site: Next.js/TypeScript/Tailwind frontend, Go/Gin REST API,
PostgreSQL, fully Dockerized. English/Japanese language toggle.

## Local development

```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8080/api/health
- Postgres: localhost:5432 (user/pass/db: portfolio)

Or run each piece natively:

```bash
# backend
cd backend
cp .env.example .env   # edit DATABASE_URL if not using Docker's Postgres
go run main.go

# frontend (separate terminal)
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

## Project layout

```
frontend/   Next.js app (App Router), Tailwind, bilingual UI
backend/    Go + Gin REST API: /api/projects, /api/skills, /api/contact
docker-compose.yml   local full stack: postgres + backend + frontend
```

## Free-tier 24/7 hosting

This is designed to run entirely on free tiers — see the deployment
walkthrough in the assistant's reply for the step-by-step, or the summary
below:

1. **Database — Neon** (free Postgres, serverless, sleeps when idle but
   wakes on connection): create a project, copy the connection string.
2. **Backend — Render** (free Web Service): point it at `backend/`, it
   builds the Dockerfile automatically. Set `DATABASE_URL` (from Neon) and
   `ALLOWED_ORIGINS` (your Vercel domain) as environment variables.
   Free Render services sleep after 15 minutes idle and wake on the next
   request (a few seconds of cold start) — acceptable for a portfolio.
3. **Frontend — Vercel** (free Hobby plan): import the repo, set the root
   directory to `frontend/`, set `NEXT_PUBLIC_API_URL` to your Render URL.
   Vercel's free tier does not sleep.
4. **Custom domain**: buy one (e.g. `sujalgaikwad.dev`, ~$10-15/year — this
   is the one recurring cost) and attach it in Vercel's domain settings. A
   `.dev` domain reads well for a software engineer's resume link, similar
   to `momosuke.dev`.

## Notes for the Japan job search

- Keep the resume link on the domain root so it fits cleanly on a paper
  resume or LinkedIn (`sujalgaikwad.dev`, no `/portfolio` suffix).
- Consider adding a downloadable PDF resume (English + a Japanese-formatted
  rirekisho/shokumu-keirekisho if you're applying to companies that expect
  one) linked from the contact section.
- The Japanese translations here are a starting point — have a native
  speaker or tutor check them before relying on them in interviews.
