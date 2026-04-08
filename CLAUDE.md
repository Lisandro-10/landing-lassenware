# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Next.js 14 App Router landing page for a digital agency, with bilingual support (ES/EN) and dark mode.

### Routing & Internationalization

All routes are nested under `src/app/[locale]/` — the dynamic `[locale]` segment handles `es` and `en`. Spanish (`es`) is the default locale. Middleware at `src/middleware.ts` enforces locale prefixes on every request. Navigation helpers from `src/i18n/navigation.ts` (re-exports from `next-intl`) must be used instead of Next.js native `Link`/`useRouter` so locale is preserved automatically.

Translation strings live in `src/messages/es.json` and `src/messages/en.json`. Components access them via `useTranslations()` from `next-intl`.

### Content Data

Static content (portfolio projects, testimonials) is defined as TypeScript modules in `src/data/`. Modifying visible content usually means editing these files and/or the JSON translation files — not component logic.

### Styling

Tailwind CSS with custom design tokens defined in `tailwind.config.ts`:
- **Brand colors**: Ember (`#E85D24`), Spark (`#F5874F`), Glow (`#FFC49B`), Void (`#111111`), Slate, Cloud
- **Fonts**: Space Grotesk for headings (`font-display`), DM Sans for body (`font-body`)
- Dark mode is class-based (`darkMode: "class"`), toggled via `useTheme` hook with localStorage persistence

### Contact Form

The contact form in `ContactSection` posts to the Web3Forms API. Requires `NEXT_PUBLIC_WEB3FORMS_KEY` env var (see `.env.example`).

### Key Directories

- `src/app/components/landing/` — Page sections (Hero, Projects, Process, Testimonials, About, FAQ, Contact)
- `src/app/components/layout/` — Navbar and Footer
- `src/app/hooks/` — `useTheme`, `useHydration`
- `src/data/` — Projects and testimonials data
- `src/messages/` — i18n JSON translation files
- `public/brand/` — SVG brand assets (logo marks, favicon)
