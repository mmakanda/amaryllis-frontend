import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:  "#7B2FBE",
          violet:  "#7B3FA0",
          magenta: "#C2449F",
          crimson: "#E8304A",
          orange:  "#F5821F",
          gold:    "#F5B800",
          charcoal:"#555555",
        },
        primary: {
          DEFAULT: "#7B2FBE",
          foreground: "#FFFFFF",
          50:  "#F5EDFD",
          100: "#E9D8FB",
          200: "#D3B1F7",
          300: "#BC8AF3",
          400: "#A663EF",
          500: "#7B2FBE",
          600: "#6326A2",
          700: "#4B1D7A",
          800: "#321352",
          900: "#1A0A2A",
        },
        accent: {
          DEFAULT: "#F5821F",
          foreground: "#FFFFFF",
          light: "#FFB347",
          dark:  "#D4600A",
        },
        flame: {
          red:     "#E8304A",
          orange:  "#F5821F",
          gold:    "#F5B800",
          magenta: "#C2449F",
          violet:  "#7B3FA0",
        },
        background: "#FFFFFF",
        foreground: "#1A1A2E",
        muted: {
          DEFAULT: "#F4F4F8",
          foreground: "#6B6B8A",
        },
        border: "#E2E2EF",
        input:  "#E2E2EF",
        ring:   "#7B2FBE",
        success: "#16A34A",
        warning: "#F5B800",
        error:   "#E8304A",
        info:    "#0284C7",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "flame-gradient": "linear-gradient(135deg, #E8304A 0%, #F5821F 30%, #F5B800 55%, #C2449F 80%, #7B3FA0 100%)",
        "brand-gradient": "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)",
        "hero-mesh": "radial-gradient(ellipse at 20% 50%, rgba(123,47,190,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245,130,31,0.12) 0%, transparent 55%)",
      },
      boxShadow: {
        glow:        "0 0 30px rgba(123,47,190,0.25)",
        "glow-lg":   "0 0 60px rgba(123,47,190,0.35)",
        "glow-accent":"0 0 30px rgba(245,130,31,0.3)",
        card:        "0 4px 24px rgba(26,26,46,0.08), 0 1px 4px rgba(26,26,46,0.04)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease-out both",
        "fade-in":    "fadeIn 0.5s ease-out both",
        "flame-pulse":"flamePulse 3s ease-in-out infinite",
        float:        "float 6s ease-in-out infinite",
        shimmer:      "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        flamePulse: { "0%, 100%": { filter: "brightness(1)" }, "50%": { filter: "brightness(1.15)" } },
        float:   { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% center" }, "100%": { backgroundPosition: "200% center" } },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
