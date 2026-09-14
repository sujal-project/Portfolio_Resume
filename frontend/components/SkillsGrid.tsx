"use client";

import { useLang } from "@/lib/i18n";
import { SkillGroup } from "@/lib/data";
import Section from "./Section";

export default function SkillsGrid({ groups }: { groups: SkillGroup[] }) {
  const { t, lang } = useLang();

  return (
    <Section id="skills" title={t("skills_title")}>
      <div className="flex flex-col gap-4">
        {groups.map((g) => (
          <div key={g.category} className="card px-6 py-5">
            <div className="flex items-center gap-2">
              <span className="gradient-bar h-2 w-2 rounded-full" aria-hidden="true" />
              <h3 className="font-semibold text-ink">
                {lang === "ja" ? g.category_ja : g.category}
              </h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-pill px-3 py-1 text-sm font-medium text-pillText"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
