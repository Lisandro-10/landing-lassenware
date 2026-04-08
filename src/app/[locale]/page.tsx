import HeroSection from "../components/landing/HeroSection";
import TechMarquee from "../components/landing/TechMarquee";
import ProjectsSection from "../components/landing/ProjectsSection";
import ServicesSection from "../components/landing/ServicesSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import PhilosophySection from "../components/landing/PhilosophySection";
import FaqSection from "../components/landing/FaqSection";
import ContactSection from "../components/landing/ContactSection";

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <TechMarquee />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <PhilosophySection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
