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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">{t.sections.skills}</h2>
          <p className="mt-2 text-muted-foreground">
            Stack organizada por tipo de entrega: mobile, back-end, front-end, dados, infraestrutura e IA.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {profile.skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border bg-card p-4">
              <h3 className="text-sm font-semibold uppercase tracking-normal text-muted-foreground">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="gap-1.5 px-3 py-1">
                    <TechIcon name={skill} className="size-3" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}