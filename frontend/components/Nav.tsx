"use client";

import { Menu } from "lucide-react";
import { useLang } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Nav() {
  const { t } = useLang();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="gradient-text text-lg font-bold">
          Sujal Gaikwad
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-muted md:flex">
          <a href="#summary" className="hover:text-ink transition-colors">{t("nav_about")}</a>
          {/* <a href="#philosophy" className="hover:text-ink transition-colors">{t("nav_philosophy")}</a> */}
          {/* <a href="#education" className="hover:text-ink transition-colors">{t("nav_education")}</a> */}
          <a href="#skills" className="hover:text-ink transition-colors">{t("nav_skills")}</a>
          <a href="#projects" className="hover:text-ink transition-colors">{t("nav_projects")}</a>
          {/* <a href="#skills" className="hover:text-ink transition-colors">{t("nav_skills")}</a> */}
          <a href="#education" className="hover:text-ink transition-colors">{t("nav_education")}</a>
          <a href="#contact" className="hover:text-ink transition-colors">{t("nav_contact")}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Menu className="h-5 w-5 text-muted md:hidden" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
