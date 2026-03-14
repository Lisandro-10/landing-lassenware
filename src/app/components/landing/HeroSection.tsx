"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiZap } from "react-icons/fi";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center section-container overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — Text */}
        <div className="flex flex-col items-start">
          {/* Founder byline */}
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-5">
            {t("founder")}
          </span>

          {/* Headline */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-text-primary dark:text-white leading-[1.05] mb-4">
            Lassenware
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-display font-semibold text-text-secondary dark:text-gray-300 mb-8">
            {t("tagline")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/5492612657201"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={18} />
              <span>{t("whatsapp")}</span>
            </a>
            <a
              href="/#portfolio"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <span>{t("viewProjects")}</span>
              <FiArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right — Device mockup + badge */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Background blob */}
          <div
            className="absolute inset-0 rounded-[2rem] bg-glow/30 dark:bg-primary/10"
            style={{ transform: "rotate(-2deg) scale(1.05)" }}
          />

          {/* Mockup card */}
          <div className="relative z-10 w-full max-w-sm rounded-[2rem] bg-cloud dark:bg-dark-lighter border border-border dark:border-dark-lighter overflow-hidden shadow-xl">
            <div className="p-4 pb-0">
              {/* Browser chrome dots */}
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-border dark:bg-gray-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-border dark:bg-gray-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-border dark:bg-gray-600" />
              </div>
              {/* Mockup image — reuse the ecommerce project screenshot */}
              <div className="relative w-full aspect-[16/10] rounded-t-xl overflow-hidden bg-surface-tertiary dark:bg-dark">
                <Image
                  src="/projects/hexagon.png"
                  alt="Lassenware project preview"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Fast Delivery badge */}
          <div
            className="absolute bottom-4 -left-4 sm:left-4 z-20
                       flex items-center gap-2.5
                       bg-white dark:bg-dark-lighter
                       border border-border dark:border-dark-lighter
                       rounded-2xl shadow-lg px-4 py-3"
          >
            <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FiZap size={16} className="text-primary" />
            </div>
            <div>
              <p className="text-xs font-display font-bold text-text-primary dark:text-white leading-tight">
                {t("badge")}
              </p>
              <p className="text-[11px] text-text-tertiary leading-tight mt-0.5">
                {t("badgeSub")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}