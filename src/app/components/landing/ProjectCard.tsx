import Image from "next/image";
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

  const CardWrapper = liveUrl
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card overflow-hidden group block cursor-pointer"
        >
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <div className="card overflow-hidden group">{children}</div>
      );

  return (
    <CardWrapper>
      {/* Image with category badge + hover overlay */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] font-bold tracking-widest uppercase
                       bg-primary text-white px-2.5 py-1 rounded-md"
          >
            {category}
          </span>
        </div>


      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-base font-display font-bold text-text-primary dark:text-white
                     mb-1.5 group-hover:text-primary transition-colors leading-snug"
        >
          {title}
        </h3>
        <p className="text-sm text-text-secondary dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Bottom row — source code link or private indicator */}
        <div
          className="flex items-center pt-3.5 border-t border-border-light dark:border-dark-lighter"
          onClick={(e) => e.stopPropagation()}
        >
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-text-tertiary
                         hover:text-text-primary dark:hover:text-white transition-colors"
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
    </CardWrapper>
  );
}