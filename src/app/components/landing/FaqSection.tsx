"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ_COUNT = 5;

export default function FaqSection() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-container bg-cloud dark:bg-dark-lighter">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="font-display font-bold
                       text-2xl sm:text-3xl md:text-4xl text-text-primary dark:text-white mb-3"
          >
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base text-text-secondary dark:text-gray-400">
            {t("subtitle")}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {Array.from({ length: FAQ_COUNT }, (_, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`card overflow-hidden transition-shadow duration-200 ${
                  isOpen ? "shadow-md" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-text-primary dark:text-white">
                    {t(`items.${i}.question`)}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center
                                transition-colors duration-200
                                ${isOpen
                                  ? "bg-primary text-white"
                                  : "bg-surface-tertiary dark:bg-dark text-text-tertiary"
                                }`}
                  >
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                              ${isOpen ? "max-h-64" : "max-h-0"}`}
                >
                  <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                    {t(`items.${i}.answer`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}