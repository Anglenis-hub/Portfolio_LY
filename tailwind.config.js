/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': '#E2E2D5',
      },
      rotate: {
        15: '15deg',
        25: '25deg',
        45: '45deg',
        135: '135deg',
        360: '360deg',
      },
    },
    boxShadow: {
      'defaultBox': '0 2px 10px 1px rgba(0, 0, 0, 0.1)',
    }
  },
  plugins: [],
  corePlugins: {
    transform: true,   // Enable Transform Utilities
    translate: true,   // Enable Translate Utilities
    rotate: true,      // Enable Rotate Utilities
    scale: true,       // Enable Scale Utilities
  },
}

