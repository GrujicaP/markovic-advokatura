/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        gold: {
          100: "#fff7e6",
          200: "#ffe0b2",
          300: "#ffcc80",
          400: "#ffc107",
          500: "#ffa000",
          600: "#ff8f00",
        },
        navy: {
          light: "#2c3e50",
          DEFAULT: "#1a2639",
          dark: "#0f172a",
        },
        cream: "#fdfaf6",
        stone: {
          light: "#f5f5f4",
          DEFAULT: "#78716c",
          dark: "#44403c",
        },
      },
      boxShadow: {
        custom: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "custom-lg": "0 10px 30px rgba(0, 0, 0, 0.12)",
        "custom-gold": "0 4px 20px rgba(255, 193, 7, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
