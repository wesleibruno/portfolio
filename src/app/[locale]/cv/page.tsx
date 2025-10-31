"use client";

import { profile, socialLinks } from "@/data/profile";
import { CvActions } from "@/components/cv-download";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";

const dict = { pt, en, es, fr } as const;

export default function CVPage() {
  const locale = useCurrentLocale();
  const t = dict[locale];
  return (
    <main className="mx-auto max-w-4xl p-6 print:p-0">
      <div className="mb-4 flex items-center justify-end print:hidden">
        <CvActions
          targetId="cv-root"
          labels={{
            print: locale === 'pt' ? 'Imprimir' : locale === 'es' ? 'Imprimir' : locale === 'fr' ? 'Imprimer' : 'Print',
            download: locale === 'pt' ? 'Baixar PDF' : locale === 'es' ? 'Descargar PDF' : locale === 'fr' ? 'Télécharger PDF' : 'Download PDF',
            generating: locale === 'pt' ? 'Gerando...' : locale === 'es' ? 'Generando...' : locale === 'fr' ? 'Génération...' : 'Generating...'
          }}
        />
      </div>
      <section id="cv-root" className="rounded-lg border bg-card p-6 print:border-0 print:rounded-none">
        <header className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-sm text-muted-foreground">{t.profile.headline}</p>
          </div>
          <div className="text-xs text-muted-foreground">
            {profile.contact?.email ? <p>{profile.contact.email}</p> : null}
            {profile.contact?.phone ? <p>{profile.contact.phone}</p> : null}
            <p className="hidden print:block">{socialLinks.linkedin}</p>
            <p className="hidden print:block">{socialLinks.github}</p>
          </div>
        </header>

        <hr className="my-4" />

        <section>
          <h2 className="text-lg font-semibold">{locale === 'pt' ? 'Perfil' : locale === 'es' ? 'Perfil' : locale === 'fr' ? 'Profil' : 'Profile'}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t.profile.bio}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold">{locale === 'pt' ? 'Experiência Profissional' : locale === 'es' ? 'Experiencia Profesional' : locale === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience'}</h2>
          <div className="mt-3 space-y-4">
            {t.experience.items?.map((exp: any, i: number) => (
              <div key={i}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <p className="font-medium">{exp.role}</p>
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                </div>
                <p className="text-xs text-muted-foreground">{exp.company}</p>
                <p className="mt-2 text-sm text-muted-foreground">{exp.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">{t.sections.education}</h2>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              {t.education.items?.map((ed: any, i: number) => (
                <li key={i}>
                  <p className="font-medium text-foreground">{ed.degree}</p>
                  <p>{ed.school} — {ed.period}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">{t.sections.languages}</h2>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {t.languagesData.list?.map((l: any) => (
                <li key={l.name}><span className="text-foreground font-medium">{l.name}</span>: {l.level}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold">{t.sections.skills}</h2>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {profile.skills?.map((s) => (
              <span key={s} className="rounded border px-2 py-1">{s}</span>
            ))}
          </div>
        </section>

        {t.certifications.list?.length ? (
          <section className="mt-6">
            <h2 className="text-lg font-semibold">{t.sections.certifications}</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
              {t.certifications.list.map((c: string) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </section>

      <div className="mt-4 hidden print:block">
        <p className="text-center text-xs text-muted-foreground">{locale === 'pt' ? 'Impresso de' : locale === 'es' ? 'Impreso de' : locale === 'fr' ? 'Imprimé depuis' : 'Printed from'} {socialLinks.linkedin}</p>
      </div>
    </main>
  );
}


