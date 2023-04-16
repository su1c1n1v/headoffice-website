/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
    fontFamily: {
      montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      menu: "url('/src/assets/img/AdobeStock_328796674.jpeg')",
    },
    colors: {
      gray: {
        primary: '#706F6F',
        secondary: '#1D1D1B',
      },
      yellow: {
        primary: '#F2EDE9',
        secondary: '#B48426',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
