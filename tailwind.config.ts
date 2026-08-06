import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#070B10",
          soft: "#0D141C",
          panel: "#111A24",
          line: "#1E2A36",
        },
        frost: {
          DEFAULT: "#EEF5F7",
          dim: "#B7C6CC",
          faint: "#7C8B93",
        },
        ice: {
          DEFAULT: "#8FE3FF",
          deep: "#3FB6D6",
          glow: "#C9F5FF",
        },
        platinum: {
          DEFAULT: "#B9C4CC",
          dim: "#6E7A82",
        },
        signal: {
          DEFAULT: "#17C964",
          deep: "#0B8457",
          bright: "#22E37E",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-space)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      backgroundImage: {
        "ice-radial":
          "radial-gradient(circle at 50% 0%, rgba(143,227,255,0.14), rgba(7,11,16,0) 60%)",
        "panel-gradient":
          "linear-gradient(180deg, rgba(17,26,36,0.9) 0%, rgba(13,20,28,0.9) 100%)",
        "cta-gradient": "linear-gradient(135deg, #22E37E 0%, #0B8457 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(143,227,255,0.35)",
        soft: "0 20px 60px -20px rgba(0,0,0,0.6)",
        cta: "0 12px 40px -8px rgba(23,201,100,0.45)",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(23,201,100,0.45)" },
          "50%": { boxShadow: "0 0 0 14px rgba(23,201,100,0)" },
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.06)" },
          "100%": { transform: "translate3d(0,0,0) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        pulseSoft: "pulseSoft 2.6s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        shimmer: "shimmer 3.2s linear infinite",
        floatY: "floatY 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
