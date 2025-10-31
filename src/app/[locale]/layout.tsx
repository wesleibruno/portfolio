import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/locales';
import "../globals.css";
// Providers e shell já são aplicados no layout raiz

export const metadata: Metadata = {
  title: "Weslei Bruno | Portfólio",
  description: "Portfólio moderno construído com Next.js 16, Tailwind e shadcn/ui.",
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as any)) notFound();
  return <>{children}</>;
}


