"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Root error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-tertiary dark:bg-dark px-4">
      <div className="max-w-md w-full text-center">
        <p className="font-display font-bold text-lg text-primary mb-6 tracking-tight">
          Lassenware
        </p>
        <h2 className="font-display font-bold text-2xl text-text-primary dark:text-white mb-3">
          ¡Algo salió mal!
        </h2>
        <p className="text-sm text-text-secondary dark:text-gray-400 mb-8 leading-relaxed">
          Ocurrió un error inesperado. Por favor, intentá nuevamente.
        </p>
        <button onClick={reset} className="btn-primary">
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}