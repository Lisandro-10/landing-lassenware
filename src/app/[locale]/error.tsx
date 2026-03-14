"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error("Locale error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-tertiary dark:bg-dark px-4">
      <div className="max-w-md w-full text-center">
        <p className="font-display font-bold text-lg text-primary mb-6 tracking-tight">
          Lassenware
        </p>
        <h2 className="font-display font-bold text-2xl text-text-primary dark:text-white mb-3">
          {t("title")}
        </h2>
        <p className="text-sm text-text-secondary dark:text-gray-400 mb-8 leading-relaxed">
          {t("description")}
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          {t("tryAgain")}
        </button>
      </div>
    </div>
  );
}