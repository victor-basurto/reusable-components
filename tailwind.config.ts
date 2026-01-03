/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // this links tailwind class like: 'bg-primary' to your CSS variables
        primary: "var(--primary)",
        "primary-fg": "var(--primary-foreground)",
        background: "var(--bg-color)",
        foreground: "var(--text-color)",
        border: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
