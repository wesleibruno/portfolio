"use client";

import { profile, socialLinks } from "@/data/profile";
import { RippleButton } from "@/components/ripple-button";
import Link from "next/link";
import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

export function ContactBanner() {
  const { contact } = profile;
  const dict = { pt, en, es, fr } as const;
  const locale = useCurrentLocale();
  const t = dict[locale];
  return (
    <section className="mx-auto max-w-6xl px-4 pt-6">
      <motion.div
        className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-3"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-sm">
          <p className="font-medium">{profile.name}</p>
          <p className="text-muted-foreground">{t.profile.headline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {contact?.phone ? (
            <RippleButton variant="outline" size="sm" asChild>
              <Link href={`tel:${contact.phone}`}>
                <Phone className="mr-2 h-4 w-4" /> {contact.phone}
              </Link>
            </RippleButton>
          ) : null}
          {contact?.email ? (
            <RippleButton variant="outline" size="sm" asChild>
              <Link href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-4 w-4" /> {contact.email}
              </Link>
            </RippleButton>
          ) : null}
          <RippleButton variant="secondary" size="sm" asChild>
            <Link href={socialLinks.whatsapp} target="_blank">
              <MessageCircle className="mr-2 h-4 w-4" /> {t.buttons.whatsapp}
            </Link>
          </RippleButton>
          <RippleButton variant="default" size="sm" asChild>
            <Link href={socialLinks.linkedin} target="_blank">
              <Linkedin className="mr-2 h-4 w-4" /> {t.buttons.linkedin}
            </Link>
          </RippleButton>
          <RippleButton variant="secondary" size="sm" asChild>
            <Link href={socialLinks.github} target="_blank">
              <Github className="mr-2 h-4 w-4" /> {t.buttons.github}
            </Link>
          </RippleButton>
          {profile.resumeUrl ? (
            <RippleButton size="sm" asChild>
              <Link href={`/${locale}${profile.resumeUrl}`}>
                {t.buttons.downloadCv}
              </Link>
            </RippleButton>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}


