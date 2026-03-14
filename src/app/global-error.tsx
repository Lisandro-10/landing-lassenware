"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="es">
      <body style={{ backgroundColor: "#111111", color: "#ffffff", margin: 0 }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div style={{ maxWidth: "28rem", width: "100%", textAlign: "center" }}>
            <p
              style={{
                fontWeight: "700",
                fontSize: "1.125rem",
                color: "#E85D24",
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Lassenware
            </p>
            <h2
              style={{
                fontWeight: "700",
                fontSize: "1.5rem",
                marginBottom: "0.75rem",
              }}
            >
              ¡Algo salió mal!
            </h2>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#9ca3af",
                marginBottom: "2rem",
                lineHeight: "1.6",
              }}
            >
              Ocurrió un error crítico. Por favor, recargá la página.
            </p>
            <button
              onClick={reset}
              style={{
                backgroundColor: "#E85D24",
                color: "#ffffff",
                border: "none",
                borderRadius: "1rem",
                padding: "0.75rem 1.5rem",
                fontWeight: "600",
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}