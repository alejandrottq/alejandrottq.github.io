/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '1500px',
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36a9f8',
          500: '#0070ff',
          600: '#0056cc',
          700: '#0043a4',
          800: '#053986',
          900: '#0a306f',
          950: '#071f4b',
        },
      },
    },
  },
  plugins: [],
};
