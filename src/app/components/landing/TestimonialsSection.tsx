"use client";

import { useTranslations } from "next-intl";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";

export default function TestimonialsSection() {
  const t = useTranslations("Testimonials");

  return (
    <section id="testimonios" className="section-container">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div key={item.key} className="card p-7 flex flex-col gap-5 relative">

              {/* Large opening quote mark */}
              <span
                className="absolute top-5 right-6 font-display font-bold text-5xl
                           text-primary/15 dark:text-primary/20 leading-none select-none"
                aria-hidden
              >
                "
              </span>

              {/* Quote */}
              <p className="text-sm sm:text-base text-text-secondary dark:text-gray-300
                            leading-relaxed relative z-10">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border-light dark:border-dark-lighter">
                {item.photo ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image src={item.photo} alt={item.name} fill className="object-cover" />
                  </div>
                ) : (
                  /* Initials avatar */
                  <div
                    className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center
                               bg-primary/10 dark:bg-primary/20"
                  >
                    <span className="text-xs font-display font-bold text-primary">
                      {item.initials}
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-sm font-display font-bold text-text-primary dark:text-white leading-tight">
                    {item.name}
                  </p>
                  <p className="text-xs text-text-tertiary mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}