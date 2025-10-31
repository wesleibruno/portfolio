"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

export function Experience() {
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold">{t.sections.experience}</h2>
        <div className="mt-6 space-y-6">
          {t.experience.items.map((exp, i) => (
            <div key={i} className="rounded-lg border p-4">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <p className="font-medium">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{exp.summary}</p>
              {exp.highlights?.length ? (
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function Education() {
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold">{t.sections.education}</h2>
        <div className="mt-6 space-y-4">
          {t.education.items.map((ed, i) => (
            <div key={i} className="flex flex-col justify-between gap-2 rounded-lg border p-4 sm:flex-row sm:items-center">
              <div>
                <p className="font-medium">{ed.degree}</p>
                <p className="text-sm text-muted-foreground">{ed.school}</p>
              </div>
              <p className="text-sm text-muted-foreground">{ed.period}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <Separator className="my-8" />
    </section>
  );
}


