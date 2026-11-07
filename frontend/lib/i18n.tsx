"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type Lang = "en" | "ja";

const dictionaries = {
  en: {
    nav_about: "About",
    nav_philosophy: "Philosophy",
    nav_education: "Education",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_role: "AI & Software Engineer",
    hero_location: "Rasayani, Maharashtra, India — open to relocating to Tokyo, Japan",
    summary_title: "About Me",
    summary_body:
      "BSc IT graduate who builds AI-integrated applications end to end — an LLM-powered voice assistant that controls a laptop, phone and smart home, a Flask hiring platform with a machine-learning matching engine, and a Spring Boot system that replaced a manual academic workflow. Works with Python, PyTorch, Java, TypeScript, LLM APIs and AWS. Looking to bring that same hands-on approach to an AI Engineer role in Japan; actively studying Japanese to support the move.          BSc IT graduate who builds full-stack, AI-integrated applications end to end — from a Flask hiring platform with a machine-learning matching engine to a Spring Boot system that replaced a manual academic workflow. Looking to bring that same hands-on approach to a Software Engineer role in Japan; actively studying Japanese to support the move.",
    philosophy_title: "Philosophy",
    philosophy_1_lead: "Problem-first thinking:",
    philosophy_1_rest:
      "I start from the actual bottleneck — like a resume screen that used to take days — before picking a stack.",
    philosophy_2_lead: "Building end-to-end:",
    philosophy_2_rest:
      "I'd rather ship a complete system than a demo. NexHireAI and SRMS both run full-stack, database to dashboard.",
    philosophy_3_lead: "Reliability over flash:",
    philosophy_3_rest:
      "I care about the unglamorous parts, like an empty database not crashing — that's what holds up once it's in use.",
    philosophy_4_lead: "Continuous learning:",
    philosophy_4_rest:
      "Learning Japanese and Go right now, because the stack you'll need next rarely matches the one you already know.",
    education_title: "Education",
    education_degree: "BSc in Information Technology",
    education_school: "Chhatrapati Shivaji Maharaj University, Panvel, Maharashtra, India",
    education_meta: "Graduated: July 2026 (degree certificate pending issuance) · CGPA: 7.70 / 10",
    education_coursework_label: "Relevant coursework",
    education_coursework:
      "Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Software Engineering, System Architecture, Cloud Computing",
    projects_title: "Technical Projects",
    projects_view_repo: "View repository",
    skills_title: "Technical Skills",
    certifications_title: "Certifications & Training",
    cert_1: "Career Essentials in Generative AI — Microsoft & LinkedIn Learning (September 2026)",
    cert_2: "Introduction to Generative AI — AWS Educate",
    contact_title: "Contact",
    contact_lede: "Recruiting in Tokyo, or want to talk about the projects above? Reach me directly:",
    contact_email_label: "Email",
    contact_location_label: "Location",
    footer_built_with: "Built with TypeScript, Next.js, Tailwind CSS, Go, Gin, PostgreSQL, and Docker.",
  },
  ja: {
    nav_about: "概要",
    nav_philosophy: "哲学",
    nav_education: "学歴",
    nav_projects: "プロジェクト",
    nav_skills: "スキル",
    nav_contact: "お問い合わせ",
    hero_role: "ソフトウェアエンジニア",
    hero_location: "インド マハーラーシュトラ州 ラサヤニ在住 — 東京への移住を希望",
    summary_title: "概要",
    summary_body:
      "情報技術学の学士号を持ち、フルスタックかつAIを組み込んだアプリケーションを一から構築してきました。機械学習のマッチングエンジンを備えたFlask製採用プラットフォームや、手作業の学務フローを置き換えたSpring Bootシステムなどです。同じ姿勢で日本のソフトウェアエンジニア職に貢献したいと考えており、移住に向けて日本語を学習中です。",
    philosophy_title: "哲学",
    philosophy_1_lead: "課題ドリブンの思考：",
    philosophy_1_rest:
      "履歴書選考に何日もかかっていたような、本当のボトルネックから考え始め、その上で技術スタックを選ぶ。",
    philosophy_2_lead: "一気通貫で作る：",
    philosophy_2_rest:
      "デモではなく完成したシステムを届けたい。NexHireAIもSRMSも、データベースからダッシュボードまでフルスタックで動く。",
    philosophy_3_lead: "派手さより信頼性：",
    philosophy_3_rest:
      "空のデータベースでクラッシュしないといった地味な部分にこだわる。それが実運用で効いてくる。",
    philosophy_4_lead: "学び続ける：",
    philosophy_4_rest:
      "現在、日本語とGoを学習中。次に必要なスタックは、今持っているものと違うことが多いから。",
    education_title: "学歴",
    education_degree: "情報技術学 学士（BSc in Information Technology）",
    education_school: "Chhatrapati Shivaji Maharaj University（インド マハーラーシュトラ州 パンヴェル）",
    education_meta: "卒業：2026年7月（学位証明書は発行待ち） ・ CGPA：7.70 / 10",
    education_coursework_label: "関連科目",
    education_coursework:
      "データ構造とアルゴリズム、オブジェクト指向プログラミング（OOP）、データベース管理システム（DBMS）、ソフトウェア工学、システムアーキテクチャ、クラウドコンピューティング",
    projects_title: "技術プロジェクト",
    projects_view_repo: "リポジトリを見る",
    skills_title: "技術スキル",
    certifications_title: "認定・研修",
    cert_1: "Career Essentials in Generative AI — Microsoft & LinkedIn Learning（2026年9月）",
    cert_2: "Introduction to Generative AI — AWS Educate",
    contact_title: "お問い合わせ",
    contact_lede: "東京での採用をご検討中の方、上記のプロジェクトについて話したい方は、直接ご連絡ください：",
    contact_email_label: "メール",
    contact_location_label: "所在地",
    footer_built_with: "TypeScript、Next.js、Tailwind CSS、Go、Gin、PostgreSQL、Dockerで構築。",
  },
} as const;

export type DictKey = keyof typeof dictionaries["en"];

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      t: (key: DictKey) => dictionaries[lang][key],
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
