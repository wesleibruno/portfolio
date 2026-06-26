"use client";

import Link from "next/link";
import { socialLinks } from "@/data/profile";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

export function Footer() {
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  return (
    <footer className="border-t py-6 print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} wesleibruno</p>
        <div className="flex gap-4">
          <Link href={socialLinks.github} target="_blank" className="hover:text-foreground">{t.buttons.github}</Link>
          <Link href={socialLinks.linkedin} target="_blank" className="hover:text-foreground">{t.buttons.linkedin}</Link>
          <Link href={socialLinks.whatsapp} target="_blank" className="hover:text-foreground">WhatsApp</Link>
        </div>
      </div>
    </footer>
  );
}


