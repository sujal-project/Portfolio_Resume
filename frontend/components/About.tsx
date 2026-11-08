"use client";

import { useLang } from "@/lib/i18n";
import Section from "./Section";

export default function About() {
  const { t } = useLang();
  return (
    <Section id="summary" title={t("summary_title")}>
      <div className="card px-6 py-6">
        <p className="text-[15px] leading-relaxed text-ink">{t("summary_body")}</p>

        <h3 className="mt-8 mb-4 text-xl font-bold text-ink">{t("philosophy_title")}</h3>

        <ul className="flex flex-col gap-3">
          {[
            ["philosophy_1_lead", "philosophy_1_rest"],
            ["philosophy_2_lead", "philosophy_2_rest"],
            ["philosophy_3_lead", "philosophy_3_rest"],
            ["philosophy_4_lead", "philosophy_4_rest"],
          ].map(([lead, rest], i) => (
            <li key={i} className="flex gap-2 text-[15px] leading-relaxed text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <p>
                <strong>{t(lead as any)}</strong> {t(rest as any)}
              </p>
            </li>
          ))}
        </ul>



      </div>
    </Section>
  );
}

