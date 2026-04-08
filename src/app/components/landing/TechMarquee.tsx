const TECH_ITEMS = [
  "Next.js",
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "TailwindCSS",
  "AWS",
  "Vercel",
  "MercadoPago",
  "Tiendanube",
  "Node.js",
];

export default function TechMarquee() {
  // Double the items for seamless infinite loop
  const items = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="w-full overflow-hidden py-5 border-y border-border dark:border-dark-lighter bg-surface dark:bg-dark-lighter">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {items.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-6 text-sm font-medium tracking-wide text-text-tertiary dark:text-gray-500 uppercase"
          >
            <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
