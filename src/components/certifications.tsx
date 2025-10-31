"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

export function Certifications() {
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold">{t.sections.certifications}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {t.certifications.list?.map((c: string) => (
            <Badge key={c} className="bg-primary/10 text-foreground hover:bg-primary/20">{c}</Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


