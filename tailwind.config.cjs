/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFmaily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        gray: '#7B7B7B',
        accent: '#FF9E44',
        link: '#2194FE',
      },
    },
  },
  plugins: [],
};
