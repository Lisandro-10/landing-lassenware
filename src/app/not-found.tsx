"use client";

import Link from "next/link";
import { BiHome, BiArrowBack } from "react-icons/bi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-tertiary dark:bg-dark text-text-primary dark:text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">

        {/* Wordmark fallback (no SlashLogo here — this page has no locale/theme context) */}
        <p className="font-display font-bold text-lg text-primary mb-8 tracking-tight">
          Lassenware
        </p>

        <h1 className="font-display font-bold text-8xl sm:text-9xl text-primary/20 mb-4 leading-none">
          404
        </h1>

        <h2 className="font-display font-bold text-2xl sm:text-3xl mb-3">
          Página no encontrada
        </h2>
        <p className="text-sm sm:text-base text-text-secondary dark:text-gray-400 mb-10 max-w-sm mx-auto leading-relaxed">
          La página que buscás no existe o fue movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="/"
            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <BiHome size={18} />
            <span>Volver al inicio</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <BiArrowBack size={18} />
            <span>Volver atrás</span>
          </button>
        </div>
      </div>
    </div>
  );
}