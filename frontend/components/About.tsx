// "use client";

// import { useLang } from "@/lib/i18n";
// import Section from "./Section";

// export default function About() {
//   const { t } = useLang();
//   return (
//     <Section id="summary" title={t("summary_title")}>
//       <div className="card px-6 py-6">
//         <p className="leading-relaxed text-ink">{t("summary_body")}</p>
//       </div>
//     </Section>
//   );
// }

"use client";

import { useLang, DictKey } from "@/lib/i18n";
import Section from "./Section";

export default function About() {
  const { t } = useLang();

  const items: [DictKey, DictKey][] = [
    ["philosophy_1_lead", "philosophy_1_rest"],
    ["philosophy_2_lead", "philosophy_2_rest"],
    ["philosophy_3_lead", "philosophy_3_rest"],
    ["philosophy_4_lead", "philosophy_4_rest"],
  ];

  return (
    <Section id="summary" title={t("summary_title")}>
      <div className="card px-6 py-6">
        {/* About Me content */}
        <p className="leading-relaxed text-ink">
          {t("summary_body")}
        </p>

        {/* Philosophy content inside About Me */}
        <h3 className="mt-8 mb-4 text-xl font-bold text-ink">
          {t("philosophy_title")}
        </h3>

        <ul className="flex flex-col gap-3">
          {items.map(([lead, rest], i) => (
            <li
              key={i}
              className="flex gap-2 leading-relaxed text-ink"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <p>
                <span className="font-semibold">{t(lead)}</span>{" "}
                {t(rest)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}