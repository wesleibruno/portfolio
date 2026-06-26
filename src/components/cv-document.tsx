import { Badge } from "@/components/ui/badge";
import { profile, socialLinks } from "@/data/profile";
import { Github, Linkedin, Mail, MessageCircle, Phone, type LucideIcon } from "lucide-react";

function cleanUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

function phoneHref(phone: string) {
  return `tel:+${phone.replace(/\D/g, "")}`;
}

function ContactLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <a data-pdf-link href={href} className="inline-flex items-center gap-2 hover:underline md:justify-end">
      <Icon aria-hidden className="size-3.5 shrink-0 text-[#93c5fd]" />
      <span>{label}</span>
    </a>
  );
}

export function CvDocument() {
  return (
    <section id="cv-root" className="cv-sheet overflow-hidden rounded-lg border border-[#e2e8f0] bg-[#ffffff] text-[#0f172a] shadow-sm print:rounded-none print:border-0 print:shadow-none">
      <header className="bg-[#111827] px-7 py-7 text-[#ffffff] print:px-6 print:py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#93c5fd]">Desenvolvedor Full Stack</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight tracking-normal">{profile.name}</h1>
            <p className="mt-2 text-base text-[#e2e8f0]">{profile.headline}</p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#cbd5e1]">{profile.cvIntro}</p>
          </div>

          <address className="not-italic text-sm leading-6 text-[#e2e8f0] md:text-right">
            {profile.contact.email ? (
              <p>
                <ContactLink href={`mailto:${profile.contact.email}`} icon={Mail} label={profile.contact.email} />
              </p>
            ) : null}
            {profile.contact.phone ? (
              <p>
                <ContactLink href={phoneHref(profile.contact.phone)} icon={Phone} label={`${profile.contact.phone} (ligar)`} />
              </p>
            ) : null}
            <p>
              <ContactLink href={socialLinks.whatsapp} icon={MessageCircle} label={`WhatsApp: ${cleanUrl(socialLinks.whatsapp)}`} />
            </p>
            <p>
              <ContactLink href={socialLinks.linkedin} icon={Linkedin} label={cleanUrl(socialLinks.linkedin)} />
            </p>
            <p>
              <ContactLink href={socialLinks.github} icon={Github} label={cleanUrl(socialLinks.github)} />
            </p>
          </address>
        </div>
      </header>

      <div className="px-7 py-6 print:px-6 print:py-5">
        <section className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="cv-heading">Perfil</h2>
            <p className="mt-2 text-sm leading-6 text-[#334155]">{profile.bio}</p>
          </div>
          <div className="rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-4">
            <h2 className="cv-heading">Destaques técnicos</h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-5 text-[#334155]">
              {profile.cvHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 size-1.5 rounded-full bg-[#2563eb]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-7">
          <h2 className="cv-heading">Projetos relevantes</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {profile.relevantProjects.map((project) => (
              <article key={project.title} className="rounded-md border border-[#e2e8f0] p-4">
                <p className="text-xs font-semibold uppercase tracking-normal text-[#2563eb]">{project.scope}</p>
                <h3 className="mt-1 text-base font-semibold leading-snug">{project.title}</h3>
                <p className="mt-2 text-sm leading-5 text-[#334155]">{project.summary}</p>
                <ul className="mt-3 flex flex-col gap-1.5 text-xs leading-5 text-[#475569]">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1 rounded-full bg-[#94a3b8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded border border-[#e2e8f0] bg-[#f8fafc] px-2 py-1 text-[11px] font-medium text-[#334155]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h2 className="cv-heading">Experiência profissional</h2>
          <div className="mt-3 flex flex-col gap-4">
            {profile.experience.map((exp) => (
              <article key={`${exp.role}-${exp.company}`} className="border-l-2 border-[#e2e8f0] pl-4">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-base font-semibold leading-tight">{exp.role}</h3>
                    <p className="text-sm text-[#475569]">{exp.company}</p>
                  </div>
                  <p className="text-xs font-medium text-[#64748b]">{exp.period}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-[#334155]">{exp.summary}</p>
                {exp.highlights?.length ? (
                  <ul className="mt-2 flex flex-col gap-1 text-sm leading-5 text-[#334155]">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-2 size-1 rounded-full bg-[#2563eb]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-7 grid gap-5 md:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h2 className="cv-heading">Skills</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {profile.skillGroups.map((group) => (
                <div key={group.title} className="rounded-md border border-[#e2e8f0] p-3">
                  <h3 className="text-xs font-semibold uppercase tracking-normal text-[#64748b]">{group.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary" className="border border-[#e2e8f0] bg-[#f8fafc] text-[#334155]">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <section>
              <h2 className="cv-heading">Educação</h2>
              <ul className="mt-2 flex flex-col gap-2 text-sm text-[#334155]">
                {profile.education.map((item) => (
                  <li key={item.degree}>
                    <p className="font-semibold text-[#0f172a]">{item.degree}</p>
                    <p>{item.school} - {item.period}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="cv-heading">Idiomas</h2>
              <ul className="mt-2 flex flex-col gap-1 text-sm text-[#334155]">
                {profile.languages.map((item) => (
                  <li key={item.name}><span className="font-semibold text-[#0f172a]">{item.name}</span>: {item.level}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="cv-heading">Certificações</h2>
              <ul className="mt-2 flex flex-col gap-1 text-sm text-[#334155]">
                {profile.certifications.slice(0, 5).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}
