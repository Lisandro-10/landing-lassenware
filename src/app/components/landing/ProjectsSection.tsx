"use client";

import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <section id="portfolio" className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <h2
            className="section-heading-accent font-display font-bold
                       text-2xl sm:text-3xl md:text-4xl text-text-primary dark:text-white mb-2"
          >
            {t("title")}
          </h2>
          <p className="text-sm text-text-tertiary mt-3">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.key}
              title={t(`items.${project.key}.title`)}
              description={t(`items.${project.key}.description`)}
              category={t(`items.${project.key}.category`)}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}