"use client";

import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

type SectionKey = keyof typeof pt.sections;

export function SectionHeading({ section }: { section: SectionKey }) {
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  return <h2 className="text-2xl font-semibold">{t.sections[section]}</h2>;
}


