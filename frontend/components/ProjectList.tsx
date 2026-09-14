"use client";

import { Code2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Project } from "@/lib/data";
import Section from "./Section";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const { t, lang } = useLang();

  return (
    <Section id="projects" title={t("projects_title")}>
      <div className="flex flex-col gap-5">
        {projects.map((p) => (
          <article key={p.id} className="card relative overflow-hidden pl-6">
            <span className="gradient-strip absolute left-0 top-0 h-full w-1.5" aria-hidden="true" />
            <div className="flex gap-4 px-4 py-6">
              <div className="gradient-bar hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white sm:flex">
                <Code2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-ink">{lang === "ja" ? p.title_ja : p.title}</h3>
                  {p.repo_url && (
                    <a
                      href={p.repo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      {t("projects_view_repo")}
                    </a>
                  )}
                </div>

                <p className="mt-1 text-sm text-muted">{p.period}</p>

                <p className="mt-3 max-w-[60ch] leading-relaxed text-ink">
                  {lang === "ja" ? p.summary_ja : p.summary}
                </p>

                <ul className="mt-3 flex flex-col gap-1.5">
                  {(lang === "ja" ? p.highlights_ja : p.highlights).map((h, i) => (
                    <li key={i} className="max-w-[60ch] text-sm leading-relaxed text-muted">
                      <span className="text-accent">•</span> {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-pill px-3 py-1 text-xs font-medium text-pillText"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
