"use client";

import { Award } from "lucide-react";
import { useLang } from "@/lib/i18n";
import Section from "./Section";

export default function Certifications() {
  const { t } = useLang();
  const certs = [t("cert_1"), t("cert_2")];

  return (
    <Section id="certifications" title={t("certifications_title")}>
      <div className="flex flex-col gap-4">
        {certs.map((cert, i) => (
          <div key={i} className="card relative overflow-hidden pl-6">
            <span className="gradient-strip absolute left-0 top-0 h-full w-1.5" aria-hidden="true" />
            <div className="flex items-center gap-4 px-4 py-5">
              <div className="gradient-bar flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white">
                <Award className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-ink">{cert}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
