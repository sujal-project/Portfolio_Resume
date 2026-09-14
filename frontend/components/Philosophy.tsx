"use client";

import { useLang, DictKey } from "@/lib/i18n";
import Section from "./Section";

export default function Philosophy() {
  const { t } = useLang();

  const items: [DictKey, DictKey][] = [
    ["philosophy_1_lead", "philosophy_1_rest"],
    ["philosophy_2_lead", "philosophy_2_rest"],
    ["philosophy_3_lead", "philosophy_3_rest"],
    ["philosophy_4_lead", "philosophy_4_rest"],
  ];

  return (
    <Section id="philosophy" title={t("philosophy_title")}>
      <div className="card px-6 py-6">
        <ul className="flex flex-col gap-3">
          {items.map(([lead, rest], i) => (
            <li key={i} className="flex gap-2 leading-relaxed text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <p>
                <span className="font-semibold">{t(lead)}</span> {t(rest)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
