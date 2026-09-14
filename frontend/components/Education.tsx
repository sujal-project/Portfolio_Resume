"use client";

import { GraduationCap } from "lucide-react";
import { useLang } from "@/lib/i18n";
import Section from "./Section";

export default function Education() {
  const { t } = useLang();
  return (
    <Section id="education" title={t("education_title")}>
      <div className="card relative overflow-hidden pl-6">
        <span className="gradient-strip absolute left-0 top-0 h-full w-1.5" aria-hidden="true" />
        <div className="flex gap-4 px-4 py-6">
          <div className="gradient-bar flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-semibold text-ink">{t("education_degree")}</h3>
            <p className="mt-1 text-accent">{t("education_school")}</p>
            <p className="mt-1 text-sm text-muted">{t("education_meta")}</p>
            <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted">
              <span className="text-ink">{t("education_coursework_label")}: </span>
              {t("education_coursework")}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
