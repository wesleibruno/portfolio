import { CvActions } from "@/components/cv-download";
import { CvDocument } from "@/components/cv-document";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/locales";

export const metadata = {
  title: "Currículo | " + profile.name,
};

const labels: Record<Locale, { print: string; download: string; generating: string }> = {
  pt: { print: "Imprimir", download: "Baixar PDF", generating: "Gerando..." },
  en: { print: "Print", download: "Download PDF", generating: "Generating..." },
  es: { print: "Imprimir", download: "Descargar PDF", generating: "Generando..." },
  fr: { print: "Imprimer", download: "Télécharger PDF", generating: "Génération..." },
};

export default async function CVPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main className="bg-[#f1f5f9] px-4 py-6 print:bg-white print:p-0">
      <div className="mx-auto mb-4 flex max-w-5xl items-center justify-end print:hidden">
        <CvActions targetId="cv-root" labels={labels[locale] ?? labels.pt} />
      </div>
      <div className="mx-auto max-w-5xl">
        <CvDocument />
      </div>
    </main>
  );
}