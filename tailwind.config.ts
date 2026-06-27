import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          mid: "#13294B",
          light: "#1A3560",
        },
        gold: {
          DEFAULT: "#C9922A",
          light: "#E5B04A",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
