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
      manicure1: "url('/src/assets/img/estetica-image5.png')",
      drenagem1: "url('/src/assets/img/estetica-image6.jpg')",
      hifu1: "url('/src/assets/img/estetica-image7.jpg')",
      lipo1: "url('/src/assets/img/estetica-image9.jpg')",
      estetica2: "url('/src/assets/img/estetica-image10.jpg')",
      estetica3: "url('/src/assets/img/estetica-image11.jpg')",
      'rf-sculpt1': "url('/src/assets/img/estetica-image8.jpg')",
      'estetica-medica1': "url('/src/assets/img/estetica-medica-image1.jpeg')",
      'estetica-medica2': "url('/src/assets/img/estetica-medica-image2.jpeg')",
      estetica4: "url('/src/assets/img/estetica-image12.jpg')",
      estetica5: "url('/src/assets/img/estetica-image13.jpg')",
      estetica6: "url('/src/assets/img/estetica-image14.jpg')",
      estetica7: "url('/src/assets/img/estetica-image16.JPEG')",
      estetica8: "url('/src/assets/img/estetica-image17.JPEG')",
      estetica9: "url('/src/assets/img/estetica-image15.jpeg')",
      estetica10: "url('/src/assets/img/estetica-image18.JPEG')",
      estetica11: "url('/src/assets/img/estetica-image19.png')",
      estetica12: "url('/src/assets/img/estetica-image20.jpg')",
      estetica12: "url('/src/assets/img/estetica-image20.jpg')",

      //Loja
      'loja1-effect': "url('/src/assets/img/loja/loja1-effect2.png')",
      missao: "url('/src/assets/img/loja/Missão.jpeg')",

      // estetica corpo
      'Radiofrequência-corporal':
        "url('/src/assets/img/estetica corpo/Radiofrequência corporal.jpeg')",
      Lipolaser: "url('/src/assets/img/estetica corpo/Lipolaser.jpeg')",

      // Cuidados beleza
      Pedicure: "url('/src/assets/img/cuidados beleza/Pedicure.jpg')",
      'Verniz-gel': "url('/src/assets/img/cuidados beleza/Verniz gel.jpg')",
      'Unha-de-gel': "url('/src/assets/img/cuidados beleza/Unha de gel.jpg')",
      Manicure: "url('/src/assets/img/cuidados beleza/Manicure.jpg')",
      Massagem: "url('/src/assets/img/cuidados beleza/Massagem.jpg')",
      'Delipação-cera/linha':
        "url('/src/assets/img/cuidados beleza/Depilação a cera.jpg')",
      'Epilação-laser':
        "url('/src/assets/img/cuidados beleza/Epilação laser.jpeg')",
      'Micropigmentação-ou-tatuagem-semi-permanente':
        "url('/src/assets/img/cuidados beleza/Micropigmentação ou tatuagem semi-permanente.JPEG')",
      Hidragloss: "url('/src/assets/img/cuidados beleza/Hidragloss.JPEG')",
      'Lash-Lifting':
        "url('/src/assets/img/cuidados beleza/Lash Lifting.JPEG')",
      'Brow-Lamination':
        "url('/src/assets/img/cuidados beleza/Brow Lamination.jpeg')",

      // Medician estetica
      botox: "url('/src/assets/img/medicina estetica/Botox.jpg')",
      'Biostimulatores-de-colagénio':
        "url('/src/assets/img/medicina estetica/Biostimulatores de colagénio.jpg')",
      'Fios-tensores':
        "url('/src/assets/img/medicina estetica/Fios tensores.jpeg')",
      'acido-hialuronico':
        "url('/src/assets/img/medicina estetica/Acido Hialurónico.jpg')",

      // Estetica-rosto
      aquapeel: "url('/src/assets/img/estetica rosto/Aquapeel.jpeg')",
      'limpeza-pele':
        "url('/src/assets/img/estetica rosto/Limpeza de Pele.jpeg')",
      radiofrequencia:
        "url('/src/assets/img/estetica rosto/Radiofrequência.jpeg')",
      'peelings-quimicos':
        "url('/src/assets/img/estetica rosto/Peelings químicos.jpg')",
      'velashape-rosto':
        "url('/src/assets/img/estetica rosto/Velashape rosto.jpg')",

      // Cabelos
      Brushing: "url('/src/assets/img/cabelos/Brushing.jpeg')",
      'Cor-2-em-1': "url('/src/assets/img/cabelos/Cor 2 em 1.jpeg')",
      Balayagem: "url('/src/assets/img/cabelos/Balayagem.jpeg')",
      Madeixas: "url('/src/assets/img/cabelos/Madeixas.jpeg')",
      'Mechas-criativas':
        "url('/src/assets/img/cabelos/Mechas criativas.jpeg')",
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
