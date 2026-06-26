"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

export function Contact() {
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold">{t.sections.contact}</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">{t.sectionsDesc.contact}</p>
        <div className="mt-6 flex gap-3">
          <Button variant="secondary" asChild>
            <Link href={socialLinks.whatsapp} target="_blank" aria-label={t.buttons.whatsapp}>
              <MessageCircle className="mr-2 h-4 w-4" /> {t.buttons.whatsapp}
            </Link>
          </Button>
          <Button asChild>
            <Link href={`mailto:${profile.contact.email}`}>{t.buttons.email}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/wesleibruno" target="_blank">{t.buttons.github}</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}


