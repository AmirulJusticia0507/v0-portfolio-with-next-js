import { Navigation } from "@/components/portfolio/navigation";
import { Hero } from "@/components/portfolio/hero";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Languages } from "@/components/portfolio/languages";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div id="about">
        <Hero />
      </div>
      <Skills />
      <Experience />
      <Languages />
      <Contact />
      <Footer />
    </main>
  );
}
