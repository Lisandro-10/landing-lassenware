"use client";

import { FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import SlashLogo from "@/app/components/ui/SlashLogo";

export const Footer = () => {
  const t = useTranslations("Footer");
  const tContact = useTranslations("Contact");

  return (
    <footer className="border-t border-border dark:border-dark-lighter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

          {/* Left — Brand */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <SlashLogo size={28} />
              <span className="font-display font-bold text-text-primary dark:text-white">
                Lassenware
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-text-tertiary">
              <FiMapPin size={13} />
              <span>{tContact("location")}</span>
            </div>
          </div>

          {/* Center — Social / contact links */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:contacto@lassenware.com"
              className="p-2.5 bg-surface-tertiary dark:bg-dark-lighter text-text-tertiary
                         hover:text-primary hover:bg-primary/10 transition-all rounded-full"
              aria-label="Email"
            >
              <FiMail size={17} />
            </a>
            <a
              href="https://wa.me/5492612567201"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-surface-tertiary dark:bg-dark-lighter text-text-tertiary
                         hover:text-primary hover:bg-primary/10 transition-all rounded-full"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/lisandro-andia-3b46aa23a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-surface-tertiary dark:bg-dark-lighter text-text-tertiary
                         hover:text-primary hover:bg-primary/10 transition-all rounded-full"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={17} />
            </a>
          </div>

          {/* Right — Copyright */}
          <p className="text-xs text-text-tertiary text-center sm:text-right">
            {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};