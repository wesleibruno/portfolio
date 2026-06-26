import { CvActions } from "@/components/cv-download";
import { CvDocument } from "@/components/cv-document";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Currículo | " + profile.name,
};

export default function CVPage() {
  return (
    <main className="bg-[#f1f5f9] px-4 py-6 print:bg-white print:p-0">
      <div className="mx-auto mb-4 flex max-w-5xl items-center justify-end print:hidden">
        <CvActions targetId="cv-root" />
      </div>
      <div className="mx-auto max-w-5xl">
        <CvDocument />
      </div>
    </main>
  );
}