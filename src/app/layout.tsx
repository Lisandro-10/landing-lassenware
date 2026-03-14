import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Lassenware — Hacemos tu vida más fácil",
  description:
    "Soluciones digitales para tu negocio. Landing pages, e-commerce y sistemas a medida.",
  icons: {
    icon: [
      { url: "/brand/lassenware-favicon-16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/brand/lassenware-favicon-32.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    shortcut: "/brand/lassenware-favicon-32.svg",
    apple: "/brand/lassenware-favicon-32.svg",
  },
  // ─── Google Search Console ──────────────────────────────────────────────────
  // 1. Ir a https://search.google.com/search-console
  // 2. Agregar propiedad → "Prefijo de URL" → https://lassenware.com
  // 3. Elegir verificación por "Etiqueta HTML"
  // 4. Copiar SOLO el valor del atributo content (sin las comillas ni el tag)
  // 5. Reemplazar "REEMPLAZAR_CON_TU_CODIGO_GSC" con ese valor
  verification: {
    google: "",
  },
  // ────────────────────────────────────────────────────────────────────────────
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} font-body flex flex-col min-h-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}