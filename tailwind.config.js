/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile': '600px',
      },
      spacing: {
        '340': '340px',
        '400': '400px',
      },
      colors: {
        'primary': '#FF6363',
        'secondary': '#E2E2D5',
        'foot': '#f5f5f5',
      },
      rotate: {
        15: '15deg',
        25: '25deg',
        45: '45deg',
        135: '135deg',
        360: '360deg',
      },
      inset: {
        '8': '2rem',
        '10': '2.5rem',
        '48': '12rem',
        '96': '24rem',
      },
      padding: {
        '5/100': '5%',
      },
      zIndex: {
        '-10': '-10',
      },
    },
    boxShadow: {
      'defaultBox': '0 2px 10px 1px rgba(0, 0, 0, 0.1)',
    },
  },
  plugins: [],
  corePlugins: {
    transform: true,   // Enable Transform Utilities
    translate: true,   // Enable Translate Utilities
    rotate: true,      // Enable Rotate Utilities
    scale: true,       // Enable Scale Utilities
  },
}

