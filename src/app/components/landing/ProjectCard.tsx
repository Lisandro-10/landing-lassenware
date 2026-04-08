"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FiGithub, FiLock } from "react-icons/fi";
import { useTranslations } from "next-intl";

interface ProjectTag {
  label: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  tags: ProjectTag[];
  liveUrl?: string | null;
  githubUrl?: string | null;
}

export default function ProjectCard({
  title,
  description,
  category,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const t = useTranslations("Projects");
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`card overflow-hidden group relative${liveUrl ? " cursor-pointer" : ""}`}
      role={liveUrl ? "link" : undefined}
      tabIndex={liveUrl ? 0 : undefined}
      onClick={liveUrl ? () => window.open(liveUrl, "_blank", "noopener,noreferrer") : undefined}
      onKeyDown={
        liveUrl
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                window.open(liveUrl, "_blank", "noopener,noreferrer");
              }
            }
          : undefined
      }
    >
      {/* Cursor glow — desktop only */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl hidden md:block transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(240px circle at ${glowPos.x}px ${glowPos.y}px, rgba(232, 93, 36, 0.07), transparent 70%)`,
        }}
      />

      {/* Image with category badge */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold tracking-widest uppercase bg-primary text-white px-2.5 py-1 rounded-md">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-display font-bold text-text-primary dark:text-white mb-1.5 group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-sm text-text-secondary dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center pt-3.5 border-t border-border-light dark:border-dark-lighter">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-text-tertiary hover:text-text-primary dark:hover:text-white transition-colors"
            >
              <FiGithub size={13} />
              <span>{t("sourceCode")}</span>
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-text-tertiary">
              <FiLock size={13} />
              <span>{t("privateRepo")}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
