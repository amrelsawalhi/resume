import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amr El Sawalhi - Healthcare Professional → Data Engineer",
  description: "Healthcare business professional with 8+ years of international sales experience transitioning to data engineering. Leveraging business acumen and technical skills to build data-driven solutions.",
  keywords: ["data engineer", "healthcare", "career transition", "python", "data engineering", "business intelligence"],
  authors: [{ name: "Amr El Sawalhi" }],
  openGraph: {
    title: "Amr El Sawalhi - Healthcare Professional → Data Engineer",
    description: "Healthcare business professional transitioning to data engineering with international experience and technical skills.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
