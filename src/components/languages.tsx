"use client";

import { motion } from "framer-motion";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

export function Languages() {
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  return (
    <section id="languages" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold">{t.sections.languages}</h2>
        <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground">
          {t.languagesData.list?.map((l: { name: string; level: string }) => (
            <li key={l.name}>
              <span className="font-medium text-foreground">{l.name}</span>: {l.level}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}


