import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // If you have any other folders in src that use tailwind, add them:
    "./src/page-content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // this links tailwind class like: 'bg-primary' to your CSS variables
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        background: "var(--bg-color)",
        foreground: "var(--text-color)",
        border: "var(--border-color)",
      },
      keyframes: {
        "progress-indeterminate": {
          "0%": { transform: "translateX(-100%) scaleX(0.2)" },
          "50%": { transform: "translateX(0%) scaleX(0.5)" },
          "100%": { transform: "translateX(100%) scaleX(0.2)" },
        },
      },
      animation: {
        "progress-indeterminate": "progress-indeterminate 2s infinite linear",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
