"use client";

import { MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-8 pt-8">
      <div className="card flex flex-col items-center gap-4 px-8 py-10 text-center">
        <div className="gradient-bar flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold text-white shadow-md">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="h-full w-full rounded-full object-cover"
          />
          {/* SG */}
        </div>

        <h1 className="gradient-text text-3xl font-bold sm:text-4xl">Sujal Gaikwad</h1>
        <p className="text-lg text-ink">{t("hero_role")}</p>

        <div className="flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
          {t("hero_location")}
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted">
          <a href="mailto:sujalgaikwad440@gmail.com" className="hover:text-accent transition-colors">
            sujalgaikwad440@gmail.com
          </a>
          <span className="text-border">|</span>
          <a href="tel:+919860976186" className="hover:text-accent transition-colors">
            (+91) 9860976186
          </a>
        </div>
      </div>
    </section>
  );
}
