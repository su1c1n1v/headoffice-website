import { Carousel } from 'flowbite-react';
import Container from '../components/SimpleContainer';
import { useTranslation } from 'react-i18next';
import CarouselRow from '../components/CarouselRow';

export default function Index() {
  const { t } = useTranslation();
  return (
    <>
      <div className="md:w-11/12 xl:w-8/12 m-auto h-[78.5vh] rounded-none">
        <Carousel slideInterval={6000}>
          <CarouselRow
            title="home.carrosel-1.title"
            description="home.carrosel-1.description"
            button="home.carrosel-1.button"
            img="bg-main"
            url="quem-somos"
          />
          <CarouselRow
            title="home.carrosel-2.title"
            description="home.carrosel-2.description"
            button="home.carrosel-2.button"
            img="bg-Epilação-Laser-main"
            subtitle="You might also like"
            url="/estetica/cuidados-beleza/epilacao-laser"
            reverse
          />
          <CarouselRow
            title="home.carrosel-6.title"
            description="home.carrosel-6.description"
            button="home.carrosel-6.button"
            img="bg-brushing"
            subtitle="You might also like"
            color="text-white"
            url="cabelos/brushing"
          />
          <CarouselRow
            title="home.carrosel-3.title"
            description="home.carrosel-3.description"
            button="home.carrosel-3.button"
            img="bg-HIFU"
            subtitle="You might also like"
            url="/estetica/estetica-rosto/hifu"
            reverse
          />
          <CarouselRow
            title="home.carrosel-4.title"
            description="home.carrosel-4.description"
            button="home.carrosel-4.button"
            img="bg-RF-sculpt"
            subtitle="You might also like"
            url="/estetica/estetica-corpo/rf-sculpt"
          />
          <CarouselRow
            title="home.carrosel-5.title"
            description="home.carrosel-5.description"
            button="home.carrosel-5.button"
            img="Epilação-laser"
            subtitle="You might also like"
            color="text-white"
            url="/medicina-estetica/biestimuladores-de-colagenio"
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
