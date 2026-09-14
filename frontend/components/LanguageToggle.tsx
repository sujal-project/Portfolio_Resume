"use client";

import { useLang } from "@/lib/i18n";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-border bg-white p-1 text-xs font-semibold"
      aria-label="Language"
    >
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={
          lang === "en"
            ? "gradient-bar rounded-full px-3 py-1 text-white"
            : "rounded-full px-3 py-1 text-muted transition-colors hover:text-ink"
        }
      >
        EN
      </button>
      <button
        onClick={() => setLang("ja")}
        aria-pressed={lang === "ja"}
        className={
          lang === "ja"
            ? "gradient-bar rounded-full px-3 py-1 text-white"
            : "rounded-full px-3 py-1 text-muted transition-colors hover:text-ink"
        }
      >
        JA
      </button>
    </div>
  );
}
