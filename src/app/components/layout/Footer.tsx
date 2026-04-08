"use client";

import { FiLinkedin, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import SlashLogo from "@/app/components/ui/SlashLogo";

export const Footer = () => {
  const t = useTranslations("Footer");
  const tContact = useTranslations("Contact");

  return (
    <footer className="relative bg-void text-white">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 sm:pt-16 sm:pb-12">

        {/* Pre-footer CTA */}
        <div className="text-center mb-12 pb-12 border-b border-white/10">
          <p className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
            {t("readyToStart")}
          </p>
          <p className="text-sm text-gray-400 mb-6">{t("readySubtitle")}</p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm
                       bg-primary text-white hover:bg-primary-dark shadow-glow-sm hover:shadow-glow
                       transition-all duration-300"
          >
            {t("cta")}
            <FiArrowRight size={15} />
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <SlashLogo size={28} variant="mark" />
              <span className="font-display font-bold text-white">Lassenware</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <FiMapPin size={12} />
              <span>{tContact("location")}</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:contacto@lassenware.com"
              className="p-2.5 bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary
                         transition-all rounded-full"
              aria-label="Email"
            >
              <FiMail size={17} />
            </a>
            <a
              href="https://wa.me/5492612567201"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary
                         transition-all rounded-full"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/lisandro-andia-3b46aa23a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary
                         transition-all rounded-full"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={17} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600 text-center sm:text-right">
            {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
