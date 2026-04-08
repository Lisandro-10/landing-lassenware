# Roadmap: Elevación State-of-the-Art 2026 para Lassenware

Este documento desgrana el plan de implementación de la nueva landing page en un cronograma accionable (roadmap) dividido por fases.

## Fase 1: Infraestructura y Sistema de Diseño (Sprint 1)
**Objetivo:** Establecer una base técnica sólida, integrando librerías modernas y extendiendo la identidad visual (Ember & Void).
- [ ] Instalar dependencias base (`framer-motion`, `@studio-freight/lenis`, dependencias de UI).
- [ ] Configurar `tailwind.config.ts` para sumar variables complejas (glows, keyframes de aurora, background blurs). El sistema de tokens existente (Ember/Void/Spark) se extiende — no se reemplaza.
- [ ] Implementar contexto global de scroll (`Lenis` config) en el root layout. **Solo desktop:** en mobile se mantiene el comportamiento nativo (`scroll-behavior: smooth` ya está en `globals.css`).

## Fase 2: Librería de Componentes Core (Sprint 2)
**Objetivo:** Crear los ladrillos arquitecturales de la UI que darán el look de "agencia premium".
- [ ] Construir componente `AnimatedButton` (hover magnético o glows). Usar la clase `.btn-primary` existente como base — envolver, no reemplazar.
- [ ] Crear contenedor `GlassCard` para fondos translúcidos y bordes gradientes sutiles.
- [ ] Elaborar utilidades de animación general como contenedores `FadeIn` y `SlideUp` mediante `framer-motion`. Usar el hook `useInView` de framer-motion — no scroll events manuales.
- [ ] Desarrollar un nuevo componente *Navbar* premium (sticky, glassmorphism). **Mejorar in-place** — no reconstruir desde cero, para preservar el language switcher (i18n) y el menú mobile existentes.

## Fase 3: Arquitectura y Construcción de Páginas (Sprint 3)
**Objetivo:** Rediseñar las vistas principales.
- [ ] **Hero Section:** Reimaginado enfocado al impacto y valor. Incluyendo efecto 3D abstracto o texturas aurora de fondo.
- [ ] **Social Proof / Tech Stack:** Marquesina (carrusel infinito) monocromática de tecnologías/clientes (con placeholders).
- [ ] **Servicios (Bento Grid):** Reemplaza completamente `ProcessSection`. Construcción interactiva del diseño *Bento Grid* para presentar los servicios de la agencia.
- [ ] **Nosotros (Filosofía de Agencia):** Reemplaza `AboutSection` (bio personal). Redacción y maquetación de la sección "Nuestra Filosofía" con enfoque en la identidad y valores de la agencia — no en un perfil individual.
- [ ] **Portafolio:** Tarjetas con scroll parallax que sostendrán mockups generados temporales.
- [ ] **Footer:** Rediseño a un footer de agencia de gran impacto visual.

## Fase 4: Refinamiento de Micro-interacciones (Sprint 4)
**Objetivo:** El "Wow Effect". Pulir cada interacción hasta la perfección.
- [ ] Añadir retardos de desfasaje (stagger delays) a las entradas de bento grids.
- [ ] Refinar tracking visual dentro de tarjetas (el "resplandor / glow" que sigue al cursor en hover). Nota: este efecto es desktop-only; diseñar un fallback estático para touch.
- [ ] Asegurarse de que el scroll en móvil e interacciones táctiles no rompa layout ni decaiga en performance respecto a desktop.

## Fase 5: QA, Rendimiento y Despliegue (Sprint 5)
**Objetivo:** Validar que la landing page carga como un rayo pese a sus efectos, y liberar a producción.
- [ ] Auditoría con `next/bundle-analyzer` para verificar tree-shaking de `framer-motion` (~30KB de impacto potencial).
- [ ] Auditoría local en web-vitals (Lighthouse/Performance).
- [ ] Verificar que Lenis y framer-motion no generen conflictos en iOS Safari (listeners pasivos).
- [ ] Limpieza de clases CSS muertas / dependencias no utilizadas en el refactor.
- [ ] Release final. Sustituir assets de ser necesario.
