"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BiHome, BiArrowBack } from "react-icons/bi";
import SlashLogo from "@/app/components/ui/SlashLogo";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="min-h-screen bg-surface-tertiary dark:bg-dark text-text-primary dark:text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">

        {/* Brand mark */}
        <div className="flex justify-center mb-8">
          <SlashLogo size={48} />
        </div>

        {/* 404 */}
        <h1 className="font-display font-bold text-8xl sm:text-9xl text-primary/20 mb-4 leading-none">
          404
        </h1>

        <h2 className="font-display font-bold text-2xl sm:text-3xl mb-3">
          {t("title")}
        </h2>
        <p className="text-sm sm:text-base text-text-secondary dark:text-gray-400 mb-10 max-w-sm mx-auto leading-relaxed">
          {t("description")}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
          <Link
            href="/"
            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <BiHome size={18} />
            <span>{t("backHome")}</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <BiArrowBack size={18} />
            <span>{t("previousPage")}</span>
          </button>
        </div>

        {/* Quick links */}
        <div className="pt-6 border-t border-border dark:border-dark-lighter">
          <p className="text-xs text-text-tertiary mb-3">{t("explore")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#portfolio"
              className="text-xs text-primary hover:text-primary-dark transition-colors font-medium"
            >
              {t("portfolio")}
            </Link>
            <span className="text-border dark:text-gray-700">•</span>
            <Link
              href="/#contacto"
              className="text-xs text-primary hover:text-primary-dark transition-colors font-medium"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}