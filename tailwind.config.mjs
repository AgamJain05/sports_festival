/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        secondary: '#22C55E',
        accent: '#EF4444',
        neutral: '#F8FAFC'
      }
    },
  },
  plugins: [],
}