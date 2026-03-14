"use client";

import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiUser,
  FiAtSign,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("Contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          subject: `Consulta desde lassenware.com`,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setError(t("form.error"));
      }
    } catch {
      setError(t("form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-container">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left — info + WhatsApp primary CTA */}
          <div>
            <h2
              className="font-display font-bold
                         text-3xl sm:text-4xl md:text-5xl text-text-primary dark:text-white
                         leading-tight mb-4"
            >
              {t("title")}
            </h2>
            <p className="text-base text-text-secondary dark:text-gray-400 mb-8 leading-relaxed">
              {t("subtitle")}
            </p>

            {/* WhatsApp CTA — primary action */}
            <a
              href="https://wa.me/5492612567201"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 mb-8"
            >
              <FaWhatsapp size={18} />
              <span>{t("whatsappCta")}</span>
            </a>

            {/* Contact details */}
            <div className="space-y-3">
              <a
                href="mailto:contacto@lassenware.com"
                className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400
                           hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 bg-surface-tertiary dark:bg-dark-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMail size={15} className="text-text-tertiary" />
                </div>
                <span>{t("email")}</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400">
                <div className="w-8 h-8 bg-surface-tertiary dark:bg-dark-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMapPin size={15} className="text-text-tertiary" />
                </div>
                <span>{t("location")}</span>
              </div>

              <a
                href="https://www.linkedin.com/in/lisandro-andia-3b46aa23a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400
                           hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 bg-surface-tertiary dark:bg-dark-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaLinkedinIn size={14} className="text-text-tertiary" />
                </div>
                <span>linkedin.com/in/lisandro-andia</span>
              </a>
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="card p-6 sm:p-8">
            <h3 className="text-xs font-bold tracking-widest uppercase text-text-tertiary mb-6">
              {t("form.title")}
            </h3>

            <form onSubmit={onSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-1.5 text-text-secondary dark:text-gray-300 font-medium"
                >
                  {t("form.name")}
                </label>
                <div className="relative">
                  <FiUser
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t("form.namePlaceholder")}
                    className="w-full pl-10 pr-4 py-3 bg-surface-secondary dark:bg-dark
                               border border-border-light dark:border-dark-lighter rounded-xl
                               focus:border-primary focus:ring-2 focus:ring-primary/10
                               focus:outline-none text-sm transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-1.5 text-text-secondary dark:text-gray-300 font-medium"
                >
                  {t("form.email")}
                </label>
                <div className="relative">
                  <FiAtSign
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t("form.emailPlaceholder")}
                    className="w-full pl-10 pr-4 py-3 bg-surface-secondary dark:bg-dark
                               border border-border-light dark:border-dark-lighter rounded-xl
                               focus:border-primary focus:ring-2 focus:ring-primary/10
                               focus:outline-none text-sm transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-1.5 text-text-secondary dark:text-gray-300 font-medium"
                >
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder={t("form.messagePlaceholder")}
                  className="w-full px-4 py-3 bg-surface-secondary dark:bg-dark
                             border border-border-light dark:border-dark-lighter rounded-xl
                             focus:border-primary focus:ring-2 focus:ring-primary/10
                             focus:outline-none text-sm resize-none transition-all"
                />
              </div>

              {error && <p className="text-red-500 text-xs">{error}</p>}
              {isSuccess && (
                <p className="text-green-600 dark:text-green-400 text-xs font-medium">
                  {t("form.success")}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? t("form.sending") : t("form.submit")}</span>
                {!isSubmitting && <FiArrowRight size={16} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}