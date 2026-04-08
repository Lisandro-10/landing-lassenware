"use client";

import { useTranslations } from "next-intl";
import { FiMonitor, FiShoppingCart, FiCode, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { SlideUp, FadeIn } from "@/app/components/ui/motion";

const SERVICES = [
  {
    key: "landing",
    icon: FiMonitor,
    accent: "bg-primary/10 text-primary",
  },
  {
    key: "ecommerce",
    icon: FiShoppingCart,
    accent: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
  },
  {
    key: "custom",
    icon: FiCode,
    accent: "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",
  },
] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  const t = useTranslations("Services");

  return (
    <section id="servicios" className="section-container bg-cloud dark:bg-dark-lighter">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <SlideUp>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary dark:text-white mb-3">
              {t("title")}
            </h2>
          </SlideUp>
          <FadeIn delay={0.1}>
            <p className="text-sm sm:text-base text-text-secondary dark:text-gray-400 max-w-xl mx-auto">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:grid-rows-2"
        >
          {/* Card 1 — Landing Pages (tall, spans 2 rows) */}
          <BentoCard
            service={SERVICES[0]}
            title={t("cards.landing.title")}
            pitch={t("cards.landing.pitch")}
            description={t("cards.landing.description")}
            className="lg:row-span-2 lg:min-h-[320px]"
            large
          />

          {/* Card 2 — E-commerce */}
          <BentoCard
            service={SERVICES[1]}
            title={t("cards.ecommerce.title")}
            pitch={t("cards.ecommerce.pitch")}
            description={t("cards.ecommerce.description")}
          />

          {/* Card 3 — Sistemas a Medida */}
          <BentoCard
            service={SERVICES[2]}
            title={t("cards.custom.title")}
            pitch={t("cards.custom.pitch")}
            description={t("cards.custom.description")}
          />
        </motion.div>

        {/* CTA */}
        <FadeIn delay={0.15}>
          <div className="text-center mt-12">
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest
                         text-primary hover:text-primary-dark transition-colors uppercase"
            >
              <span>{t("cta")}</span>
              <FiArrowRight size={15} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

interface BentoCardProps {
  service: { key: string; icon: React.ElementType; accent: string };
  title: string;
  pitch: string;
  description: string;
  className?: string;
  large?: boolean;
}

function BentoCard({ service, title, pitch, description, className = "", large }: BentoCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={cardVariants}
      className={`
        group relative overflow-hidden rounded-3xl p-6 sm:p-8
        bg-white dark:bg-dark border border-border-light dark:border-dark-lighter
        hover:shadow-glow-sm hover:border-primary/20 dark:hover:border-primary/20
        transition-all duration-300 cursor-default
        ${className}
      `}
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${service.accent}`}>
          <Icon size={20} />
        </div>

        {/* Pitch — large and prominent */}
        <p className={`font-display font-bold text-primary mb-1 ${large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
          {pitch}
        </p>

        {/* Title */}
        <h3 className="font-display font-bold text-base text-text-primary dark:text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
