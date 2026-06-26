import { ContactBanner } from "@/components/contact-banner";
import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import { RelevantProjects } from "@/components/relevant-projects";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience, Education } from "@/components/experience";
import { Certifications } from "@/components/certifications";
import { Languages } from "@/components/languages";
import { Contact } from "@/components/contact";

export const metadata = { title: "Weslei Bruno | Portfólio" };

export default function Home() {
  return (
    <main>
      <Hero />
      <ContactBanner />
      <RelevantProjects />
      <FeaturedProjects />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Languages />
      <Contact />
    </main>
  );
}