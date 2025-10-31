"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProfileDialog } from "@/components/profile-dialog";
import { Spotlight } from "@/components/spotlight";
import { MagneticButton } from "@/components/magnetic-button";
import { RippleButton } from "@/components/ripple-button";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

export function Hero() {
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-20%,hsl(240_5%_96%)/80%,transparent)] dark:bg-[radial-gradient(1200px_600px_at_50%_-20%,hsl(0_0%_0%)/60%,transparent)]" />
      <Spotlight />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <motion.h1
          className="text-balance text-4xl font-bold leading-tight sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent">
            {t.hero.title}
          </span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MagneticButton asChild>
            <Link href="#projects">{t.hero.ctaProjects}</Link>
          </MagneticButton>
          <MagneticButton variant="outline" asChild>
            <Link href="#contact">{t.hero.ctaContact}</Link>
          </MagneticButton>
          <ProfileDialog />
        </motion.div>
      </div>
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-primary/15 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
}


