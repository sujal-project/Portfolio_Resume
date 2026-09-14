import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sujal Gaikwad — Software Engineer",
  description:
    "Portfolio and CV of Sujal Gaikwad, a BSc IT graduate building full-stack, AI-integrated applications, targeting a Software Engineer role in Tokyo, Japan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans antialiased bg-bg">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
