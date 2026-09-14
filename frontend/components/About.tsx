"use client";

import { useLang } from "@/lib/i18n";
import Section from "./Section";

export default function About() {
  const { t } = useLang();
  return (
    <Section id="summary" title={t("summary_title")}>
      <div className="card px-6 py-6">
        <p className="leading-relaxed text-ink">{t("summary_body")}</p>
      </div>
    </Section>
  );
}
