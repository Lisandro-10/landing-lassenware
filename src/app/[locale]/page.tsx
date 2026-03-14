import HeroSection from "../components/landing/HeroSection";
import ProjectsSection from "../components/landing/ProjectsSection";
import ProcessSection from "../components/landing/ProcessSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import AboutSection from "../components/landing/AboutSection";
import ContactSection from "../components/landing/ContactSection";

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}