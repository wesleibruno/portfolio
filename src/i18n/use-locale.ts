"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/locales";

function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function useCurrentLocale(): Locale {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const maybe = parts[0];
  return isLocale(maybe) ? maybe : "pt";
}