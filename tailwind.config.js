/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        "section-sm": "3rem",     // 48px
        "section-lg": "5rem",     // 80px
        "section-gap-sm": "2rem", // 32px
        "section-gap-lg": "4rem", // 64px
      },
      colors: {
        pine: "#2F5D46",
        hay: "#F3EBDD",
        ink: "#1C1C1C",
        sky: "#F7FAF8",
      },
    },
  },
  plugins: [],
};
