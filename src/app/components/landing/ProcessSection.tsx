"use client";

import { useTranslations } from "next-intl";
import { FiArrowRight } from "react-icons/fi";

const steps = ["idea", "meeting", "proposal"] as const;

export default function ProcessSection() {
  const t = useTranslations("Process");

  return (
    <section id="proceso" className="section-container bg-cloud dark:bg-dark-lighter">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary dark:text-white mb-3">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base text-text-secondary dark:text-gray-400 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center text-center relative">

              {/* Connector line between steps (desktop only) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden sm:block absolute top-6 left-[calc(50%+2rem)] right-0
                             h-px border-t border-dashed border-border dark:border-gray-600
                             w-[calc(100%-4rem)]"
                  style={{ left: "calc(50% + 2.5rem)", width: "calc(100% - 5rem)" }}
                />
              )}

              {/* Step number circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 z-10
                            font-display font-bold text-lg
                            ${index === 0
                              ? "bg-primary text-white shadow-md shadow-primary/25"
                              : "bg-white dark:bg-dark border-2 border-border dark:border-gray-600 text-text-secondary dark:text-gray-400"
                            }`}
              >
                {index + 1}
              </div>

              <h3 className="font-display font-bold text-base text-text-primary dark:text-white mb-2">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed max-w-[220px]">
                {t(`steps.${step}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest
                       text-primary hover:text-primary-dark transition-colors uppercase"
          >
            <span>{t("cta")}</span>
            <FiArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}