import { Carousel } from 'flowbite-react';
import Container from '../components/Container';
import Image1 from '../assets/img/image1.jpg';

export default function Index() {
  return (
    <>
      <div className="m-auto h-[78.5vh] rounded-none">
        <Carousel slideInterval={5000} leftControl rightControl>
          <img src={Image1} alt="..." />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>

      {/* Container 1 */}
      <Container
        url="estetica"
        classname="bg-estetica1"
        title="Estética"
        subTitle="Design único e exclusivo"
        description="Cada detalhe é minuciosamente pensado junto com o cliente para que
        o momento seja eternizado em sua memória. Uma lembrança de uma
        grande história de amor."
      />

      {/* Container 2 */}
      <Container
        url="medicina-estetica"
        classname="bg-estetica-medica1"
        revert
        title="Estética Medica"
        subTitle="Design único e exclusivo"
        description="Cada detalhe é minuciosamente pensado junto com o cliente para que
        o momento seja eternizado em sua memória. Uma lembrança de uma
        grande história de amor."
      />

      {/* Container 3 */}
      <Container
        url="cabelos"
        classname="bg-cabelo1"
        title="Cabelos"
        subTitle="Design único e exclusivo"
        description="Cada detalhe é minuciosamente pensado junto com o cliente para que
        o momento seja eternizado em sua memória. Uma lembrança de uma
        grande história de amor."
      />
    </>
  );
}
