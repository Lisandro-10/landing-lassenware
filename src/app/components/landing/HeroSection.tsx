"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiZap } from "react-icons/fi";
import { useTranslations } from "next-intl";
import AnimatedButton from "@/app/components/ui/AnimatedButton";
import { SlideUp, FadeIn } from "@/app/components/ui/motion";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center section-container overflow-hidden">

      {/* Aurora background orbs */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[140px] animate-aurora-1" />
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-glow/20 dark:bg-glow/10 rounded-full blur-[120px] animate-aurora-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] animate-glow-pulse" />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — Text */}
        <div className="flex flex-col items-start">
          <FadeIn delay={0}>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-5 block">
              {t("founder")}
            </span>
          </FadeIn>

          <SlideUp delay={0.05}>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-text-primary dark:text-white leading-[1.05] mb-4">
              Lassenware
            </h1>
          </SlideUp>

          <SlideUp delay={0.12}>
            <p className="text-xl sm:text-2xl font-display font-semibold text-text-secondary dark:text-gray-300 mb-8">
              {t("tagline")}
            </p>
          </SlideUp>

          <SlideUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <AnimatedButton
                href="https://wa.me/5492612567201"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={18} />
                <span>{t("whatsapp")}</span>
              </AnimatedButton>
              <AnimatedButton href="/#portfolio" variant="secondary">
                <span>{t("viewProjects")}</span>
                <FiArrowRight size={16} />
              </AnimatedButton>
            </div>
          </SlideUp>
        </div>

        {/* Right — Device mockup + badge */}
        <FadeIn delay={0.25} className="relative flex justify-center lg:justify-end">
          {/* Background blob */}
          <div
            className="absolute inset-0 rounded-[2rem] bg-glow/30 dark:bg-primary/10"
            style={{ transform: "rotate(-2deg) scale(1.05)" }}
          />

          {/* Mockup card */}
          <div className="relative z-10 w-full max-w-sm rounded-[2rem] bg-cloud dark:bg-dark-lighter border border-border dark:border-dark-lighter overflow-hidden shadow-xl animate-float">
            <div className="p-4 pb-0">
              {/* Browser chrome dots */}
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-border dark:bg-gray-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-border dark:bg-gray-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-border dark:bg-gray-600" />
              </div>
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
                       bg-white/90 dark:bg-dark-lighter/90 backdrop-blur-md
                       border border-white/40 dark:border-white/10
                       rounded-2xl shadow-glow-sm px-4 py-3"
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
        </FadeIn>
      </div>
    </section>
  );
}
