"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";
import { TechIcon } from "@/components/tech-icon";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

export function Skills() {
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold">{t.sections.skills}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.skills.map((s) => (
            <Badge key={s} variant="secondary" className="px-3 py-1 flex items-center gap-2">
              <TechIcon name={s} />
              {s}
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


