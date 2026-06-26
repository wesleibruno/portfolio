import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/locales';
import "../globals.css";
// Providers e shell já são aplicados no layout raiz

export const metadata: Metadata = {
  title: "Weslei Bruno | Portfólio",
  description: "Portfólio moderno construído com Next.js 16, Tailwind e shadcn/ui.",
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <>{children}</>;
}


