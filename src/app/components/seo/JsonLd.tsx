// Server Component — no "use client"

interface JsonLdProps {
  locale: string;
}

export default async function JsonLd({ locale }: JsonLdProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages = (await import(`@/messages/${locale}.json`)).default as any;

  const baseUrl = "https://lassenware.com";
  const isEs = locale === "es";

  /* ─── 1. WebSite ──────────────────────────────────────────── */
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Lassenware",
    description: messages.Metadata.description,
    inLanguage: isEs ? "es-AR" : "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/${locale}#portfolio`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  /* ─── 2. ProfessionalService / LocalBusiness ─────────────── */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${baseUrl}/#organization`,
    name: "Lassenware",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/brand/lassenware-mark-orange.svg`,
      width: "512",
      height: "512",
    },
    image: `${baseUrl}/og-image.jpg`,
    description: messages.Metadata.description,
    founder: { "@id": `${baseUrl}/#lisandro` },
    foundingDate: "2024",
    email: "contacto@lassenware.com",
    telephone: "+5492612567201",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mendoza",
      addressRegion: "Mendoza",
      postalCode: "5500",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-32.8908",
      longitude: "-68.8272",
    },
    areaServed: [
      { "@type": "City", name: "Mendoza" },
      { "@type": "Country", name: "Argentina" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/lisandro-andia-3b46aa23a",
      "https://github.com/Lisandro-10",
    ],
    knowsAbout: isEs
      ? [
          "Desarrollo Web",
          "Landing Pages",
          "E-commerce",
          "Sistemas a Medida",
          "Next.js",
          "React",
          "Java",
          "Spring Boot",
        ]
      : [
          "Web Development",
          "Landing Pages",
          "E-commerce",
          "Custom Systems",
          "Next.js",
          "React",
          "Java",
          "Spring Boot",
        ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isEs ? "Servicios de Desarrollo Web" : "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEs ? "Landing Esencial" : "Essential Landing",
            description: isEs
              ? "Landing page con WordPress, diseño responsivo y formulario de contacto."
              : "WordPress-based landing page with responsive design and contact form.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEs ? "Web Profesional" : "Professional Web",
            description: isEs
              ? "SPA con Next.js, diseño único, SEO optimizado y animaciones."
              : "Next.js SPA with unique design, SEO optimization and animations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEs ? "Solución E-commerce" : "E-commerce Solution",
            description: isEs
              ? "E-commerce completo con integración de pagos, catálogo y panel admin."
              : "Full e-commerce with payment integration, product catalog and admin panel.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEs ? "Solución Personalizada" : "Custom Solution",
            description: isEs
              ? "Sistemas a medida para necesidades específicas de tu negocio."
              : "Custom systems tailored to your specific business needs.",
          },
        },
      ],
    },
  };

  /* ─── 3. Person ───────────────────────────────────────────── */
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#lisandro`,
    name: "Lisandro Andia",
    jobTitle: isEs
      ? "Desarrollador Full Stack & Fundador"
      : "Full Stack Developer & Founder",
    url: baseUrl,
    email: "contacto@lassenware.com",
    worksFor: { "@id": `${baseUrl}/#organization` },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mendoza",
      addressCountry: "AR",
    },
    sameAs: [
      "https://www.linkedin.com/in/lisandro-andia-3b46aa23a",
      "https://github.com/Lisandro-10",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "AWS",
      "Vercel",
    ],
  };

  /* ─── 4. FAQPage ──────────────────────────────────────────── */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const faqItems: { question: string; answer: string }[] = messages.FAQ?.items ?? [];

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const schemas = [
    websiteSchema,
    organizationSchema,
    personSchema,
    ...(faqSchema ? [faqSchema] : []),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}