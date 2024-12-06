/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': '#E2E2D5',
      },
    },
    boxShadow: {
      'defaultBox': '0 2px 10px 1px rgba(0, 0, 0, 0.1)',
    }
  },
  plugins: [],
}

