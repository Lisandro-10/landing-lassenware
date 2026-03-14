"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <section id="nosotros" className="section-container bg-cloud dark:bg-dark-lighter">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left — photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden
                            border-4 border-white dark:border-dark shadow-xl flex-shrink-0">
              <Image
                src="/profile-about.jpg"
                alt="Lisandro Andia — Fundador de Lassenware"
                fill
                className="object-cover"
              />
              {/* Ember accent corner */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <h2
              className="section-heading-accent font-display font-bold
                         text-2xl sm:text-3xl text-text-primary dark:text-white mb-6"
            >
              {t("title")}
            </h2>

            <blockquote
              className="text-base sm:text-lg text-text-secondary dark:text-gray-300
                         leading-relaxed mb-8 border-l-4 border-primary pl-5
                         italic"
            >
              {t("body")}
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-display font-bold text-primary">LA</span>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-text-primary dark:text-white">
                  {t("founder")}
                </p>
                <p className="text-xs text-text-tertiary mt-0.5">{t("founderRole")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}