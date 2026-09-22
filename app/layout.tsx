import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { PrefsProvider } from "@/lib/prefs";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "LP CLINIC Cascais — Implantologia Oral & Estética Dentária",
  description:
    "Independent design study of LP CLINIC Cascais — Motionsites clinical-editorial, PT|EN, dark|light. Not affiliated with LP CLINIC.",
  metadataBase: new URL("https://lp-clinic-cascais.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={`${geist.variable} dark`} suppressHydrationWarning>
      <body className="antialiased">
        <PrefsProvider>{children}</PrefsProvider>
      </body>
    </html>
  );
}
