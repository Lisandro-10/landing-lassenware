"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun, FiGlobe } from "react-icons/fi";
import { useTheme } from "@/app/hooks/useTheme";
import { useHydration } from "@/app/hooks/useHydration";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import SlashLogo from "@/app/components/ui/SlashLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const hydrated = useHydration();
  const t = useTranslations("Navbar");
  const tLang = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangMenuOpen(false);
  };

  const navItems = [
    { name: t("portfolio"),    href: "/#portfolio" },
    { name: t("process"),      href: "/#servicios" },
    { name: t("testimonials"), href: "/#testimonios" },
    { name: t("faq"),          href: "/#faq" },
    { name: t("contact"),      href: "/#contacto" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-white/75 dark:bg-void/75 border-b border-white/20 dark:border-white/[0.06] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <SlashLogo size={32} />
              <span
                className="font-display font-bold text-lg tracking-tight text-text-primary dark:text-white
                           group-hover:text-primary transition-colors duration-200"
              >
                Lassenware
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-text-secondary dark:text-gray-300
                             hover:text-primary dark:hover:text-primary transition-colors duration-150"
                >
                  {item.name}
                </Link>
              ))}

              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="p-2 text-text-tertiary hover:text-primary transition-colors
                             rounded-lg hover:bg-surface-tertiary dark:hover:bg-dark-lighter
                             flex items-center gap-1"
                >
                  <FiGlobe size={17} />
                  <span className="text-xs uppercase font-medium">{locale}</span>
                </button>
                {langMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-32
                               bg-white/90 dark:bg-dark-lighter/90 backdrop-blur-lg
                               border border-white/30 dark:border-white/10 rounded-xl
                               shadow-lg overflow-hidden"
                  >
                    {["es", "en"].map((loc) => (
                      <button
                        key={loc}
                        onClick={() => handleLanguageChange(loc)}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors
                          hover:bg-surface-tertiary dark:hover:bg-dark
                          ${locale === loc
                            ? "text-primary font-semibold"
                            : "text-text-secondary dark:text-gray-300"
                          }`}
                      >
                        {tLang(loc)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme toggle */}
              {hydrated && (
                <button
                  onClick={toggleTheme}
                  className="p-2 text-text-tertiary hover:text-primary transition-colors
                             rounded-lg hover:bg-surface-tertiary dark:hover:bg-dark-lighter"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? <FiMoon size={17} /> : <FiSun size={17} />}
                </button>
              )}

              {/* CTA */}
              <a href="/#contacto" className="btn-primary !py-2 !px-5 !text-sm">
                {t("contact")}
              </a>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-1">
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="p-2 text-text-tertiary hover:text-primary transition-colors"
                  aria-label="Language"
                >
                  <FiGlobe size={18} />
                </button>
                {langMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-32 bg-white dark:bg-dark-lighter
                               border border-border rounded-xl shadow-lg overflow-hidden z-50"
                  >
                    {["es", "en"].map((loc) => (
                      <button
                        key={loc}
                        onClick={() => handleLanguageChange(loc)}
                        className={`w-full px-4 py-2.5 text-left text-sm
                          ${locale === loc ? "text-primary font-semibold" : "text-text-secondary"}`}
                      >
                        {tLang(loc)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {hydrated && (
                <button
                  onClick={toggleTheme}
                  className="p-2 text-text-tertiary hover:text-primary transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
                </button>
              )}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-text-primary dark:text-white hover:text-primary transition-colors"
                aria-label="Menu"
              >
                {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white/97 dark:bg-void/97 backdrop-blur-xl">
          <div className="px-4 pt-6 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-3 text-base font-medium text-text-secondary
                           dark:text-gray-300 hover:text-primary rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href="/#contacto"
                className="btn-primary block text-center w-full"
                onClick={() => setIsOpen(false)}
              >
                {t("contact")}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
