/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        quaine: {
          canvas: "#FAFCFE",
          card: "#FFFFFF",
          midnight: "#091E3A",
          slate: "#334155",
          muted: "#64748B",
          glacier: "#00C2CB",
          cyan: "#38BDF8",
          mist: "#F1F5F9",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        luxury: "0.3em",
      },
    },
  },
  plugins: [],
};
