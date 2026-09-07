import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* ===== Reference design system ===== */
        /* `forest` token is remapped to the new Book Crew navy */
        forest: {
          DEFAULT: "#04163C",
          50: "#E7EAF1",
          100: "#C4CADC",
          200: "#8895B9",
          300: "#4D6197",
          400: "#1F3274",
          500: "#04163C",
          600: "#020E25",
          700: "#020A1B",
          800: "#010612",
          900: "#000308",
        },
        /* `bronze` token is remapped to the new Book Crew orange */
        bronze: {
          DEFAULT: "#E96503",
          50: "#FEF0E4",
          100: "#FCD9B8",
          200: "#FAB37A",
          300: "#F68D3B",
          400: "#F27919",
          500: "#E96503",
          600: "#C55202",
          700: "#944002",
          800: "#622B01",
          900: "#311601",
        },
        sage: { DEFAULT: "#A8B7A1", light: "#C5D0C0" },
        /* Primary body text now uses the navy brand color for light sections */
        charcoal: "#04163C",
        ivory: "#FAF7F2",
        stone: "#F1ECE5",
        mist: "#E7E4DD",
        /* ===== Legacy tokens (kept for About/Contact until redesigned) ===== */
        ink: {
          DEFAULT: "#0B0B0B",
          50: "#171717",
          100: "#1F1F1F",
          200: "#262626",
          300: "#2D2D2D",
          400: "#3F3F3F",
          500: "#525252",
        },
        /* `copper` is the legacy dark-theme accent; remap to brand orange */
        copper: {
          DEFAULT: "#E96503",
          50: "#FEF0E4",
          100: "#FCD9B8",
          200: "#FAB37A",
          300: "#F68D3B",
          400: "#F27919",
          500: "#E96503",
          600: "#C55202",
          700: "#944002",
          800: "#622B01",
          900: "#311601",
        },
        muted: "#B8B8B8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px -2px rgba(34, 34, 34, 0.06), 0 8px 32px -8px rgba(34, 34, 34, 0.08)",
        "card-hover":
          "0 4px 16px -2px rgba(34, 34, 34, 0.08), 0 16px 48px -12px rgba(34, 34, 34, 0.14)",
        "glow-copper": "0 0 60px -10px rgba(233, 101, 3, 0.5)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
