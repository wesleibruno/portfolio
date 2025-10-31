"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

export function About() {
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold">{t.sections.about}</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">{t.profile.bio}</p>
      </motion.div>
    </section>
  );
}


