import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import SmoothScroll from "../components/ui/SmoothScroll";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import JsonLd from "@/app/components/seo/JsonLd";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages = (await import(`../../messages/${locale}.json`)).default as any;
  const baseUrl = "https://lassenware.com";
  const isEs = locale === "es";

  const keywords = isEs
    ? [
        "desarrollador web Mendoza",
        "diseño web Mendoza",
        "landing page Mendoza",
        "e-commerce Mendoza",
        "tienda online Argentina",
        "sistemas a medida Mendoza",
        "aplicaciones web Mendoza",
        "desarrollo web Argentina",
        "Next.js Argentina",
        "freelance desarrollador web",
        "software a medida",
        "Lassenware",
        "Lisandro Andia",
        "empresa de software Mendoza",
        "agencia web Mendoza",
      ]
    : [
        "web developer Mendoza",
        "custom web development Argentina",
        "landing page design",
        "e-commerce development",
        "Next.js developer",
        "React developer Argentina",
        "custom software Mendoza",
        "web agency Mendoza",
        "Lassenware",
        "Lisandro Andia developer",
        "freelance web developer Argentina",
      ];

  return {
    title: messages.Metadata.title,
    description: messages.Metadata.description,
    keywords,
    authors: [{ name: "Lisandro Andia", url: baseUrl }],
    creator: "Lisandro Andia",
    publisher: "Lassenware",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
        "x-default": `${baseUrl}/es`,
      },
    },
    openGraph: {
      title: messages.Metadata.title,
      description: messages.Metadata.description,
      url: `${baseUrl}/${locale}`,
      siteName: "Lassenware",
      locale: isEs ? "es_AR" : "en_US",
      alternateLocale: isEs ? "en_US" : "es_AR",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isEs
            ? "Lassenware — Hacemos tu vida más fácil"
            : "Lassenware — We make your life easier",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.Metadata.title,
      description: messages.Metadata.description,
      images: ["/og-image.jpg"],
      creator: "@lassenware",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "es" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SmoothScroll />
      {/* JSON-LD structured data — rendered server-side for all pages */}
      <JsonLd locale={locale} />
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </NextIntlClientProvider>
  );
}