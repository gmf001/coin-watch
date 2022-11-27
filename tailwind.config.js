/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'arial']
      },
      colors: {
        primary: '#6060ff',
        'primary-accent': '#5151e7',
        dark: '#0f0f0f',
        'dark-accent': '#141416',
        'dark-accent-1': '#1c1d22'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
