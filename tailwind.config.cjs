/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFmaily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        gray: '#595959',
        accent: '#FF9E44',
        link: '#2188fe',
      },
    },
  },
  plugins: [],
};
