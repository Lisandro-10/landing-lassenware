"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { SlideUp, FadeIn } from "@/app/components/ui/motion";

function ParallaxCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Even-indexed cards float up slightly faster; odd go slower — subtle depth
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 18 : 24, index % 2 === 0 ? -18 : -12]);

  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  );
}

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <section id="portfolio" className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <SlideUp>
            <h2 className="section-heading-accent font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary dark:text-white mb-2">
              {t("title")}
            </h2>
          </SlideUp>
          <FadeIn delay={0.1}>
            <p className="text-sm text-text-tertiary mt-3">{t("subtitle")}</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ParallaxCard key={project.key} index={index}>
              <ProjectCard
                title={t(`items.${project.key}.title`)}
                description={t(`items.${project.key}.description`)}
                category={t(`items.${project.key}.category`)}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  );
}
