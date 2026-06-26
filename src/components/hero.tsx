"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProfileDialog } from "@/components/profile-dialog";
import { MagneticButton } from "@/components/magnetic-button";
import { ArrowUpRight, Cpu, Database, Server, Smartphone } from "lucide-react";
import { profile } from "@/data/profile";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

export function Hero() {
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  const focusIcons = [Smartphone, Server, Database, Cpu];

  return (
    <section id="home" className="relative overflow-hidden border-b">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--background)_0%,var(--secondary)_100%)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.h1
            className="text-balance text-4xl font-bold leading-tight sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-foreground to-foreground/55 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagneticButton asChild>
              <Link href="#relevant">
                {t.hero.ctaProjects}
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </MagneticButton>
            <MagneticButton variant="outline" asChild>
              <Link href="#contact">{t.hero.ctaContact}</Link>
            </MagneticButton>
            <ProfileDialog label={t.hero.viewProfile} />
          </motion.div>
        </div>

        <motion.div
          className="rounded-lg border bg-card/85 p-5 shadow-sm backdrop-blur"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          <div className="flex items-start justify-between gap-4 border-b pb-4">
            <div>
              <p className="text-sm font-semibold">{profile.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{profile.headline}</p>
            </div>
            <div className="rounded-md border bg-background px-3 py-2 text-right">
              <p className="text-xs text-muted-foreground">Stack</p>
              <p className="font-mono text-sm font-semibold">Full Stack</p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {profile.focusAreas.map((item, index) => {
              const Icon = focusIcons[index] ?? Cpu;

              return (
                <div key={item.title} className="rounded-md border bg-background/75 p-3">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4 text-primary" />
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.summary}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 rounded-md border bg-secondary/45 p-3">
            <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">Destaques técnicos</p>
            <ul className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground">
              {profile.cvHighlights.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


