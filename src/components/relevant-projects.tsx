"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";
import { TechIcon } from "@/components/tech-icon";
import { SectionHeading } from "@/components/section-heading";
import { Layers3, LineChart, Workflow } from "lucide-react";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

const dict = { pt, en, es, fr } as const;
const icons = [Workflow, LineChart, Layers3];

export function RelevantProjects() {
  const locale = useCurrentLocale();
  const t = dict[locale];

  return (
    <section id="relevant" className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-3xl">
        <SectionHeading section="relevant" />
        <p className="mt-2 text-muted-foreground">{t.sectionsDesc.relevant}</p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {profile.relevantProjects.map((project, index) => {
          const Icon = icons[index] ?? Layers3;

          return (
            <motion.article
              key={project.title}
              className="rounded-lg border bg-card p-5 shadow-sm"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="flex items-start gap-3">
                <div className="rounded-md border bg-secondary p-2 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">{project.scope}</p>
                  <h3 className="mt-1 text-lg font-semibold leading-tight">{project.title}</h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.summary}</p>

              <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                {project.impact.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1.5">
                    <TechIcon name={tag} className="size-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}