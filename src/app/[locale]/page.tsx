import { ContactBanner } from "@/components/contact-banner";
import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience, Education } from "@/components/experience";
import { Certifications } from "@/components/certifications";
import { Languages } from "@/components/languages";
import { ParallaxSection } from "@/components/parallax-section";

export const metadata = { title: 'Weslei Bruno | Portfólio' };

export default function Home() {
  return (
    <main>
      <ParallaxSection offset={20}>
        <ContactBanner />
      </ParallaxSection>
      <ParallaxSection>
        <Hero />
      </ParallaxSection>
      <ParallaxSection offset={60}>
        <FeaturedProjects />
      </ParallaxSection>
      <ParallaxSection offset={40}>
        <Projects />
      </ParallaxSection>
      <ParallaxSection offset={30}>
        <About />
      </ParallaxSection>
      <ParallaxSection offset={30}>
        <Skills />
      </ParallaxSection>
      <ParallaxSection offset={30}>
        <Experience />
      </ParallaxSection>
      <ParallaxSection offset={30}>
        <Education />
      </ParallaxSection>
      <ParallaxSection offset={20}>
        <Certifications />
      </ParallaxSection>
      <ParallaxSection offset={20}>
        <Languages />
      </ParallaxSection>
    </main>
  );
}


