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
      'radiofrequencia-corporal':
        "url('/src/assets/img/estetica corpo-container/Radiofrequência corporal.jpg')",
      lipolaser:
        "url('/src/assets/img/estetica corpo-container/Lipolaser.jpg')",
      'drenagem-linfatica':
        "url('/src/assets/img/estetica corpo-container/Drenagem linfática.jpg')",
      'hifu-corporal':
        "url('/src/assets/img/estetica corpo-container/Hifu corporal.jpg')",
      'laser-podologico':
        "url('/src/assets/img/estetica corpo-container/Laser podológico.jpg')",
      pressoterapia:
        "url('/src/assets/img/estetica corpo-container/Pressoterapia.jpg')",
      'rf-sculpt':
        "url('/src/assets/img/estetica corpo-container/RF sculpt.jpg')",
      'vela-shape-corporal':
        "url('/src/assets/img/estetica corpo-container/Vela shape.jpg')",

      // Cuidados beleza
      Pedicure: "url('/src/assets/img/cuidados beleza-container/Pedicure.jpg')",
      'Verniz-gel':
        "url('/src/assets/img/cuidados beleza-container/Verniz gel.jpg')",
      'Unha-de-gel':
        "url('/src/assets/img/cuidados beleza-container/Unha de gel.jpg')",
      Manicure: "url('/src/assets/img/cuidados beleza-container/Manicure.jpg')",
      Massagem: "url('/src/assets/img/cuidados beleza-container/Massagem.jpg')",
      'Delipação-cera/linha':
        "url('/src/assets/img/cuidados beleza-container/Depilação.jpg')",
      'Epilação-laser':
        "url('/src/assets/img/cuidados beleza-container/Epilação laser.jpg')",
      'Micropigmentação-ou-tatuagem-semi-permanente':
        "url('/src/assets/img/cuidados beleza-container/Micropigmentação.jpg')",
      Hidragloss:
        "url('/src/assets/img/cuidados beleza-container/Hidragloss.jpeg')",
      'Lash-Lifting':
        "url('/src/assets/img/cuidados beleza-container/Hidragloss.jpeg')",
      'Brow-Lamination':
        "url('/src/assets/img/cuidados beleza-container/Brow Lamination.jpg')",

      // Medicina estetica
      botox:
        "url('/src/assets/img/medicina estetica-container/Toxina botulínica.jpg')",
      'Biostimulatores-de-colagénio':
        "url('/src/assets/img/medicina estetica-container/Biostimulatores de colagénio.jpg')",
      'Fios-tensores':
        "url('/src/assets/img/medicina estetica-container/Fios tensores.jpg')",
      'acido-hialuronico':
        "url('/src/assets/img/medicina estetica-container/Ácido hialurónico.jpg')",

      // Estetica-rosto
      aquapeel: "url('/src/assets/img/estetica rosto-container/Aquapeel.jpg')",
      'hifu-rosto': "url('/src/assets/img/estetica rosto-container/HIFU.jpg')",
      'limpeza-pele':
        "url('/src/assets/img/estetica rosto-container/Limpeza de Pele.jpg')",
      radiofrequencia:
        "url('/src/assets/img/estetica rosto-container/Radiofrequência.jpg')",
      'peelings-quimicos':
        "url('/src/assets/img/estetica rosto-container/Peelings químicos.jpg')",
      'velashape-rosto':
        "url('/src/assets/img/estetica rosto-container/Velashape rosto.jpg')",

      // Cabelos
      Brushing: "url('/src/assets/img/cabelos-container/Brushing.jpg')",
      'Cor-2-em-1': "url('/src/assets/img/cabelos-container/Cor 2 em 1.jpg')",
      Balayagem: "url('/src/assets/img/cabelos-container/Balayagem.jpg')",
      Madeixas: "url('/src/assets/img/cabelos-container/Madeixas.jpg')",
      'Mechas-criativas':
        "url('/src/assets/img/cabelos-container/Mechas criativas.jpg')",
      Extensions:
        "url('/src/assets/img/cabelos-container/Aplicação de extensões.jpg')",
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
