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
      image1: "url('/src/assets/img/image1.jpg')",
      estetica1: "url('/src/assets/img/estetica-image2.jpeg')",
      cabelo1: "url('/src/assets/img/cabelo-image1.jpg')",
      'estetica-medica1': "url('/src/assets/img/estetica-medica-image1.jpeg')",
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
