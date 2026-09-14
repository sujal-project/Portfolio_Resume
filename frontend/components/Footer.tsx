"use client";

import { Github, Linkedin } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-6 border-t border-border bg-white py-10 text-center">
      <p className="gradient-text text-xl font-bold">Sujal Gaikwad</p>
      <p className="mt-1 text-sm text-muted">{t("hero_role")}</p>
      <div className="mt-4 flex justify-center gap-4">
        <a
          href="https://github.com/sujal-project"
          target="_blank"
          rel="noreferrer"
          className="text-muted transition-colors hover:text-accent"
        >
          <Github className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="https://linkedin.com/in/sujal-gaikwad-8b2362410"
          target="_blank"
          rel="noreferrer"
          className="text-muted transition-colors hover:text-accent"
        >
          <Linkedin className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
      <p className="mt-4 text-xs text-muted">© 2026 Sujal Gaikwad. All rights reserved.</p>
      <p className="mt-1 text-xs text-muted">{t("footer_built_with")}</p>
    </footer>
  );
}
