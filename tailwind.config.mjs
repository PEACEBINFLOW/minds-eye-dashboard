/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mind: {
          bg: "#020617",
          panel: "#020617",
          panelSoft: "#020617",
          accent: "#38bdf8",
          accentSoft: "#0f172a",
          text: "#e5e7eb",
          sub: "#9ca3af"
        }
      }
    }
  },
  plugins: []
};
