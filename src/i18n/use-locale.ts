"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/locales";

export function useCurrentLocale(): Locale {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const maybe = parts[0];
  return (locales.includes(maybe as any) ? (maybe as Locale) : "pt");
}


