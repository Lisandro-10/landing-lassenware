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

      boxShadow: {
        "glow-sm": "0 0 20px rgba(232, 93, 36, 0.15)",
        "glow":    "0 0 40px rgba(232, 93, 36, 0.2)",
        "glow-lg": "0 0 80px rgba(232, 93, 36, 0.25)",
      },

      animation: {
        "marquee":    "marquee 28s linear infinite",
        "float":      "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out 2s infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "aurora-1":   "aurora1 10s ease-in-out infinite",
        "aurora-2":   "aurora2 13s ease-in-out 1.5s infinite",
      },

      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%":      { transform: "translateY(-22px) scale(1.04)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.35" },
          "50%":      { opacity: "0.7" },
        },
        aurora1: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "40%":      { transform: "translate(8%, -12%) scale(1.12)" },
          "70%":      { transform: "translate(-4%, 6%) scale(0.94)" },
        },
        aurora2: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "35%":      { transform: "translate(-10%, 8%) scale(1.08)" },
          "65%":      { transform: "translate(6%, -5%) scale(0.96)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;