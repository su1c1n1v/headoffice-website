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
            url="/estetica/cuidados-beleza/epilacao-laser"
            reverse
          />
          <CarouselRow
            title="home.carrosel-6.title"
            description="home.carrosel-6.description"
            button="home.carrosel-6.button"
            img="bg-brushing"
            color="text-white"
            url="cabelos/brushing"
          />
          <CarouselRow
            title="home.carrosel-3.title"
            description="home.carrosel-3.description"
            button="home.carrosel-3.button"
            img="bg-HIFU"
            url="/estetica/estetica-rosto/hifu"
            reverse
          />
          <CarouselRow
            title="home.carrosel-4.title"
            description="home.carrosel-4.description"
            button="home.carrosel-4.button"
            img="bg-RF-sculpt"
            url="/estetica/estetica-corpo/rf-sculpt"
          />
          <CarouselRow
            title="home.carrosel-5.title"
            description="home.carrosel-5.description"
            button="home.carrosel-5.button"
            img="bg-biestimuladores-de-colagenio"
            url="/medicina-estetica/biestimuladores-de-colagenio"
          />
        </Carousel>
      </div>

      <Container
        url="quem-somos"
        classname="bg-owner"
        title="home-container.area-1.title"
        button="home-container.area-1.button"
        subTitle="home-container.area-1.subtitle"
        description="home-container.area-1.description"
      />

      <Container
        url="contatos"
        classname="bg-eventos"
        button="home-container.area-2.button"
        title="home-container.area-2.title"
        subTitle="home-container.area-2.subtitle"
        description="home-container.area-2.description"
      />
      <Container
        url="quem-somos/espaco"
        button="home-container.area-3.button"
        classname="bg-space"
        title="home-container.area-3.title"
        subTitle="home-container.area-3.subtitle"
        description="home-container.area-3.description"
      />
    </>
  );
}
