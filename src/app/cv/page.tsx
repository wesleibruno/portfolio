import { profile, socialLinks } from "@/data/profile";
import { CvActions } from "@/components/cv-download";

export const metadata = {
  title: "Currículo | " + profile.name,
};

export default function CVPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 print:p-0">
      <div className="mb-4 flex items-center justify-end print:hidden">
        <CvActions targetId="cv-root" />
      </div>
      <section id="cv-root" className="rounded-lg border bg-card p-6 print:border-0 print:rounded-none">
        <header className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-sm text-muted-foreground">{profile.headline}</p>
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
          <h2 className="text-lg font-semibold">Perfil</h2>
          <p className="mt-2 text-sm text-muted-foreground">{profile.bio}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold">Experiência Profissional</h2>
          <div className="mt-3 space-y-4">
            {profile.experience?.map((exp, i) => (
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
            <h2 className="text-lg font-semibold">Educação</h2>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              {profile.education?.map((ed, i) => (
                <li key={i}>
                  <p className="font-medium text-foreground">{ed.degree}</p>
                  <p>{ed.school} — {ed.period}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Idiomas</h2>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {profile.languages?.map((l) => (
                <li key={l.name}><span className="text-foreground font-medium">{l.name}</span>: {l.level}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold">Habilidades</h2>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {profile.skills?.map((s) => (
              <span key={s} className="rounded border px-2 py-1">{s}</span>
            ))}
          </div>
        </section>

        {profile.certifications?.length ? (
          <section className="mt-6">
            <h2 className="text-lg font-semibold">Certificações</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
              {profile.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </section>

      <div className="mt-4 hidden print:block">
        <p className="text-center text-xs text-muted-foreground">Impresso de {socialLinks.linkedin}</p>
      </div>
    </main>
  );
}


