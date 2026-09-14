"use client";

import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useLang } from "@/lib/i18n";
import Section from "./Section";

export default function Contact() {
  const { t } = useLang();
  return (
    <Section id="contact" title={t("contact_title")}>
      <div className="card px-6 py-6">
        <p className="mb-5 max-w-[60ch] leading-relaxed text-ink">{t("contact_lede")}</p>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 rounded-xl bg-bg px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pill">
              <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-muted">{t("contact_email_label")}</p>
              <a
                href="mailto:sujalgaikwad440@gmail.com"
                className="font-medium text-accent hover:underline"
              >
                sujalgaikwad440@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-bg px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pill">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-muted">{t("contact_location_label")}</p>
              <p className="font-medium text-ink">{t("hero_location")}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <a
            href="https://github.com/sujal-project"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sujal-gaikwad-8b2362410"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
