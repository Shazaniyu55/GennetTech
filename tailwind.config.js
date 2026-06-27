/** @type {import('tailwindcss').Config} */
// Note: this project uses Tailwind v4 with the @tailwindcss/vite plugin.
// Theme tokens (brand colors, fonts) are defined in src/index.css via @theme.
// This file is kept for editor tooling and content scanning.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
