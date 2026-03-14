import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // --- Lassenware Brand Palette ---
        primary: {
          DEFAULT: "#E85D24", // Ember
          light: "#F5874F",   // Spark
          dark: "#C44A18",
        },
        accent: {
          DEFAULT: "#E85D24", // Ember (action color)
          light: "#F5874F",   // Spark
          dark: "#C44A18",
        },
        glow: "#FFC49B",      // Soft highlights / badges

        // --- Neutrals ---
        void: "#111111",      // Primary black
        slate: "#2C2C2C",     // Secondary text on dark
        cloud: "#F5F4F2",     // Page backgrounds / cards on light

        // --- Surfaces ---
        surface: {
          DEFAULT: "#ffffff",
          secondary: "#F5F4F2", // Cloud
          tertiary: "#EEECE9",
        },

        // --- Text ---
        text: {
          primary: "#111111",   // Void
          secondary: "#2C2C2C", // Slate
          tertiary: "#6b7280",
          inverted: "#ffffff",
        },

        // --- Borders ---
        border: {
          DEFAULT: "#E0DDD8",
          light: "#EEECE9",
        },

        // --- Dark Mode ---
        dark: {
          DEFAULT: "#111111",   // Void
          lighter: "#1C1C1C",
          card: "#1C1C1C",
        },

        // --- Tag Colors ---
        tag: {
          blue:   { bg: "#eff6ff", text: "#2563eb" },
          purple: { bg: "#faf5ff", text: "#9333ea" },
          teal:   { bg: "#ecfeff", text: "#0891b2" },
          orange: { bg: "#fff3eb", text: "#E85D24" },
          green:  { bg: "#f0fdf4", text: "#16a34a" },
          rose:   { bg: "#fff1f2", text: "#e11d48" },
        },
      },

      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;