# Lassenware — Landing Page

Sitio web oficial de [Lassenware](https://lassenware.com). Desarrollado con Next.js 14, Tailwind CSS y next-intl.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS
- **Internacionalización:** next-intl (ES / EN)
- **Tipografías:** Space Grotesk (headings) + DM Sans (body)
- **Formulario de contacto:** Web3Forms
- **Deploy:** Vercel
- **Analytics:** Vercel Analytics

---

## Estructura del proyecto

```
src/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx              # Página principal
│   │   ├── layout.tsx            # Layout con metadata por locale
│   │   ├── not-found.tsx
│   │   ├── error.tsx
│   │   └── loading.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── landing/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       └── SlashLogo.tsx     # Brand mark — usa SVGs de /public/brand/
│   ├── hooks/
│   │   ├── useTheme.tsx
│   │   └── useHydration.tsx
│   ├── layout.tsx                # Root layout (fonts, analytics)
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── data/
│   ├── projects.ts               # Datos de proyectos del portfolio
│   └── testimonials.ts           # Testimonios (actualizar con clientes reales)
├── messages/
│   ├── es.json                   # Contenido en español
│   └── en.json                   # Contenido en inglés
└── i18n/
    ├── routing.ts
    ├── navigation.ts
    └── request.ts

public/
├── brand/                        # SVGs del sistema de marca Lassenware
│   ├── lassenware-mark-orange.svg
│   ├── lassenware-mark-white.svg
│   ├── lassenware-mark-black.svg
│   ├── lassenware-horizontal-orange.svg
│   ├── lassenware-horizontal-white.svg
│   ├── lassenware-favicon-16.svg
│   └── lassenware-favicon-32.svg
├── projects/                     # Screenshots de proyectos del portfolio
└── og-image.jpg                  # Open Graph image (1200×630)
```

---

## Secciones

| Sección | ID | Descripción |
|---|---|---|
| Hero | — | Headline, tagline, CTAs WhatsApp + Ver proyectos |
| Portfolio | `#portfolio` | Cards de proyectos — click en card abre demo en vivo |
| Proceso | `#proceso` | 3 pasos: Idea → Discovery → Propuesta |
| Testimonios | `#testimonios` | Cards con citas de clientes |
| About | `#nosotros` | Historia de origen de Lassenware |
| Contacto | `#contacto` | WhatsApp CTA + formulario Web3Forms |

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Completar NEXT_PUBLIC_WEB3FORMS_KEY con tu clave de web3forms.com

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000` — redirige automáticamente a `/es`.

---

## Variables de entorno

```env
NEXT_PUBLIC_WEB3FORMS_KEY=tu_clave_aqui
```

Obtené tu clave gratuita en [web3forms.com](https://web3forms.com).

---

## Internacionalización

El contenido está completamente separado del código en `src/messages/`:

- `es.json` — versión en español (default)
- `en.json` — versión en inglés

Para agregar o editar contenido, modificar los JSON directamente. Las keys están organizadas por sección: `Hero`, `Projects`, `Process`, `Testimonials`, `About`, `Contact`, `Footer`, etc.

---

## Agregar testimonios reales

Editar `src/data/testimonials.ts`:

```ts
{
  key: "cliente",
  name: "Nombre Cliente",
  role: "Cargo, Empresa",
  initials: "NC",
  photo: "/testimonials/cliente.jpg", // opcional
  quote: "El testimonio del cliente...",
}
```

Si se agrega foto, colocar el archivo en `public/testimonials/`.

---

## Agregar proyectos al portfolio

Editar `src/data/projects.ts` y agregar la entrada con `key`, `image`, `tags`, `liveUrl` y `githubUrl`. Luego agregar las traducciones correspondientes en `es.json` y `en.json` bajo `Projects.items`.

---

## Deploy

El proyecto está configurado para deploy automático en Vercel. Cada push a `main` dispara un nuevo deploy.

Configuración necesaria en Vercel:
- Variable de entorno: `NEXT_PUBLIC_WEB3FORMS_KEY`
- Dominio: `lassenware.com`

---

## Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| Ember (primary) | `#E85D24` | CTAs, badges, acentos |
| Spark | `#F5874F` | Hover states |
| Glow | `#FFC49B` | Highlights suaves |
| Void | `#111111` | Backgrounds dark, headlines |
| Slate | `#2C2C2C` | Texto secundario en dark |
| Cloud | `#F5F4F2` | Backgrounds de sección, cards |

---

Fundado por [Lisandro Andia](https://www.linkedin.com/in/lisandro-andia-3b46aa23a) — Mendoza, Argentina.