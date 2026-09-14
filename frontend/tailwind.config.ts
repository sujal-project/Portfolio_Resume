import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F3F6FB",
        surface: "#FFFFFF",
        border: "#E7EAF3",
        ink: "#1F2430",
        muted: "#667085",
        accent: "#4F7DF0",
        accentTo: "#8B5CF6",
        pill: "#EAF2FE",
        pillText: "#2F6FED",
        signal: "#DC2626",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "720px",
      },
    },
  },
  plugins: [],
};

export default config;
