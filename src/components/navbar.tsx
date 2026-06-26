"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu, MessageCircle } from "lucide-react";
import { socialLinks } from "@/data/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

const dict = { pt, en, es, fr } as const;

export function Navbar() {
  const [active, setActive] = useState<string>("#home");
  const [scrolled, setScrolled] = useState(false);
  const locale = useCurrentLocale();
  const t = dict[locale];
  const prefix = `/${locale}`;
  const links = [
    { href: `${prefix}/#home`, label: t.nav.home },
    { href: `${prefix}/#relevant`, label: t.sections.relevant },
    { href: `${prefix}/#projects`, label: t.nav.projects },
    { href: `${prefix}/#skills`, label: t.nav.skills },
    { href: `${prefix}/#experience`, label: t.nav.experience },
    { href: `${prefix}/#contact`, label: t.nav.contact },
  ];

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
      const sections = ["home", "relevant", "projects", "skills", "experience", "contact"];
      let curr = "#home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          curr = `#${id}`;
          break;
        }
      }

      setActive(curr);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 print:hidden z-50 w-full border-b backdrop-blur ${scrolled ? "h-14 bg-background/80" : "h-16 bg-background/60"} transition-[height,background]`}>
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <Link href={prefix} className="font-semibold">
          wesleibruno
        </Link>

        <nav className="hidden gap-5 md:flex">
          {links.map((link) => {
            const section = `#${link.href.split("#")[1]}`;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm transition-colors ${active === section ? "text-foreground" : "text-foreground/70 hover:text-foreground"}`}
              >
                <span className="inline-block transition-transform group-hover:-translate-y-0.5">{link.label}</span>
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-primary/30 transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link href={socialLinks.github} target="_blank" className="group hidden sm:block" aria-label="GitHub">
            <Avatar className="size-8 transform transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-primary/40">
              <AvatarImage src="https://github.com/wesleibruno.png" alt="Avatar GitHub" />
              <AvatarFallback>WB</AvatarFallback>
            </Avatar>
          </Link>
          <Link href={socialLinks.github} target="_blank" className="hidden text-foreground/80 hover:text-foreground sm:block" aria-label="GitHub">
            <Github className="size-5" />
          </Link>
          <Link href={socialLinks.linkedin} target="_blank" className="hidden text-foreground/80 hover:text-foreground sm:block" aria-label="LinkedIn">
            <Linkedin className="size-5" />
          </Link>
          <Link href={socialLinks.whatsapp} target="_blank" className="hidden text-foreground/80 hover:text-foreground sm:block" aria-label="WhatsApp">
            <MessageCircle className="size-5" />
          </Link>
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-6 flex flex-col gap-4">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm" prefetch={false}>
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 flex items-center gap-4">
                  <Link href={socialLinks.github} target="_blank" className="text-foreground/80 hover:text-foreground" aria-label="GitHub">
                    <Github className="size-5" />
                  </Link>
                  <Link href={socialLinks.linkedin} target="_blank" className="text-foreground/80 hover:text-foreground" aria-label="LinkedIn">
                    <Linkedin className="size-5" />
                  </Link>
                  <Link href={socialLinks.whatsapp} target="_blank" className="text-foreground/80 hover:text-foreground" aria-label="WhatsApp">
                    <MessageCircle className="size-5" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}