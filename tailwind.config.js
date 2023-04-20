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
      manicure1: "url('/src/assets/img/estetica-image5.png')",
      drenagem1: "url('/src/assets/img/estetica-image6.jpg')",
      hifu1: "url('/src/assets/img/estetica-image7.jpg')",
      lipo1: "url('/src/assets/img/estetica-image9.jpg')",
      estetica2: "url('/src/assets/img/estetica-image10.jpg')",
      estetica3: "url('/src/assets/img/estetica-image11.jpg')",
      'rf-sculpt1': "url('/src/assets/img/estetica-image8.jpg')",
      'estetica-medica1': "url('/src/assets/img/estetica-medica-image1.jpeg')",
      'estetica-medica2': "url('/src/assets/img/estetica-medica-image2.jpeg')",
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
