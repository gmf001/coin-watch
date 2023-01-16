/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '0.8rem'
    },
    extend: {
      colors: {
        gray: colors.zinc,
        primary: colors.purple['600'],
        accent: colors.purple['500'],
        black: '#0f0f0f'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
