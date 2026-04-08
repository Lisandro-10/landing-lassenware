"use client";

import { useTranslations } from "next-intl";
import { FiArrowRight, FiZap, FiPackage, FiUser } from "react-icons/fi";
import { SlideUp, FadeIn } from "@/app/components/ui/motion";
import AnimatedButton from "@/app/components/ui/AnimatedButton";

const STATS = [
  { icon: FiZap,     valueKey: "stat1Value", labelKey: "stat1Label" },
  { icon: FiPackage, valueKey: "stat2Value", labelKey: "stat2Label" },
  { icon: FiUser,    valueKey: "stat3Value", labelKey: "stat3Label" },
] as const;

export default function PhilosophySection() {
  const t = useTranslations("Philosophy");

  return (
    <section id="nosotros" className="section-container bg-cloud dark:bg-dark-lighter">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — copy */}
          <div>
            <FadeIn>
              <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 block">
                {t("eyebrow")}
              </span>
            </FadeIn>

            <SlideUp delay={0.05}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary dark:text-white leading-[1.1] mb-6">
                {t("headline")}
              </h2>
            </SlideUp>

            <SlideUp delay={0.12}>
              <p className="text-base sm:text-lg text-text-secondary dark:text-gray-300 leading-relaxed mb-8">
                {t("body")}
              </p>
            </SlideUp>

            <SlideUp delay={0.18}>
              <AnimatedButton href="/#contacto">
                {t("cta")}
                <FiArrowRight size={16} />
              </AnimatedButton>
            </SlideUp>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col gap-4">
            {STATS.map(({ icon: Icon, valueKey, labelKey }, i) => (
              <SlideUp key={valueKey} delay={0.1 + i * 0.08}>
                <div
                  className="flex items-center gap-5 p-5 rounded-2xl
                             bg-white dark:bg-dark border border-border-light dark:border-dark-lighter
                             hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-text-primary dark:text-white leading-none">
                      {t(valueKey)}
                    </p>
                    <p className="text-sm text-text-tertiary dark:text-gray-400 mt-0.5">
                      {t(labelKey)}
                    </p>
                  </div>
                </div>
              </SlideUp>
            ))}

            {/* Founder tag */}
            <FadeIn delay={0.35}>
              <div className="flex items-center gap-3 px-5 pt-2">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-display font-bold text-primary">LA</span>
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-text-primary dark:text-white">
                    {t("founder")}
                  </p>
                  <p className="text-xs text-text-tertiary">{t("founderRole")}</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
