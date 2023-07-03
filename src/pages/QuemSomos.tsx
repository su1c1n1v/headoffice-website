import { Carousel } from 'flowbite-react';
import { useTranslation } from 'react-i18next';

import equipa from '../assets/img/equipa/equipa1.jpeg';
import loja1 from '../assets/img/loja/loja1.jpg';
import loja2 from '../assets/img/loja/loja2.jpg';
import loja3 from '../assets/img/loja/loja3.jpg';
import loja4 from '../assets/img/loja/loja4.jpg';
import loja5 from '../assets/img/loja/loja5.jpg';
import loja6 from '../assets/img/loja/loja6.jpg';
import loja7 from '../assets/img/loja/loja7.jpg';
import space1 from '../assets/img/space/space1.jpg';
import space2 from '../assets/img/space/space2.jpg';
import space3 from '../assets/img/space/space3.jpg';
import space4 from '../assets/img/space/space4.jpg';
import space5 from '../assets/img/space/space5.jpg';
import space6 from '../assets/img/space/space6.jpg';
import space7 from '../assets/img/space/space7.jpg';
import space8 from '../assets/img/space/space8.jpg';
import space9 from '../assets/img/space/space9.jpg';
import space10 from '../assets/img/space/space10.jpg';
import space11 from '../assets/img/space/space11.jpg';
import space12 from '../assets/img/space/space12.jpg';
import space13 from '../assets/img/space/space13.jpg';
import space14 from '../assets/img/space/space14.jpg';
import space15 from '../assets/img/space/space15.jpg';
import space16 from '../assets/img/space/space16.jpg';
import space17 from '../assets/img/space/space17.jpg';

import owner from '../assets/img/loja/owner.jpg';
import home from '../assets/img/quemsomos/head-office-main.jpg';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function QuemSomos() {
  const { t } = useTranslation();
  const params = useParams();

  useEffect(() => {
    const handleClickScroll = () => {
      if (!params.id) return;
      const element = document.getElementById(params.id);

      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 1000);

        return () => clearTimeout(timer);
      }
    };

    handleClickScroll();
  }, [params.id]);

  return (
    <>
      <div className="md:w-11/12 xl:w-8/12 m-auto">
        <div className="md:mx-0 mx-10">
          <p className="text-5xl mb-2 text-yellow-secondary">
            {t('bem-vindo')}
          </p>
          <p>{t('subtitle-bem-vindo')}</p>
        </div>

        <div className="md:flex md:mx-0 mx-10 mt-10 md:text-sm xl:text-base">
          <div className="md:w-1/2 md:mr-10 mx-auto md:p-0">
            <p className="text-justify">{t('description1-head-office')}</p>
            <p className="text-justify md:mt-10 xl:mt-3">
              {t('description2-head-office')}
            </p>
          </div>
          <div className="md:w-1/2 md:mt-2 mt-10">
            <img
              src={home}
              alt="Main picture of the Head-Office"
              className="w-full"
            />
          </div>
        </div>

        <div className="md:mx-auto flex p-8 bg-missao bg-cover bg-left mx-10 my-20 md:py-20 rounded-lg border-2 border-yellow-secondary">
          <div className="md:w-1/2 md:mr-auto md:ml-0 w-full">
            <p className="text-gray-secondary text-xl">{t('Missão')}</p>
            <p className="text-gray-secondary text-4xl my-4">
              {t('sub-title-missao')}
            </p>
            <p className="text-justify mt-5">{t('description-Missão')}</p>
          </div>
        </div>

        <div className="w-full p-10 md:p-0 md:mx-auto md:flex my-20">
          <div className="md:w-1/2 w-full my-auto pr-10 text-sm">
            <p className="text-4xl mb-10 text-yellow-secondary">
              {t('Valores')}
            </p>
            <p>
              <span className="text-yellow-secondary font-bold">
                {t('Excelência')}{' '}
              </span>{' '}
              {t('description-Excelência')}
            </p>
            <p className="lg:my-3">
              <span className="text-yellow-secondary font-bold">
                {t('Ética')}{' '}
              </span>{' '}
              {t('description-Ética')}
            </p>
            <p className="lg:my-3">
              <span className="text-yellow-secondary font-bold">
                {t('Inovação')}{' '}
              </span>{' '}
              {t('description-Inovação')}
            </p>
            <p className="lg:my-3">
              <span className="text-yellow-secondary font-bold">
                {t('Atendimento ao cliente')}
              </span>{' '}
              {t('description-Atendimento ao cliente')}
            </p>
            <p className="lg:my-3">
              <span className="text-yellow-secondary font-bold">
                {t('Respeito')}{' '}
              </span>
              {t('description-Respeito')}
            </p>
            <p className="lg:my-3">
              <span className="text-yellow-secondary font-bold">
                {t('Responsabilidade social e ambiental')}
              </span>{' '}
              {t('description-Responsabilidade social e ambiental')}
            </p>
          </div>
          <div className="md:w-1/2 w-full mt-10 md:m-auto">
            <img src={owner} className="my-auto" alt="Equipa photo" />
          </div>
        </div>

        <p className="text-4xl mx-10 mb-10 flex md:hidden py-2 text-yellow-secondary">
          {t('Nossa equipa')}
        </p>
        <div className="md:m-auto mx-10 md:flex bg-white md:shadow-2xl md:rounded-lg">
          <div className="md:w-1/2 w-full md:mr-10">
            <img
              src={equipa}
              className="md:rounded-r-full md:h-[35rem] xl:h-auto"
              alt="Equipa photo"
            />
          </div>
          <div className="md:w-1/2 w-full md:my-auto my-10 px-10">
            <p className="text-5xl mb-10 md:flex hidden text-yellow-secondary">
              {t('Nossa equipa')}
            </p>
            <p className="text-justify pb-10">
              {t('description-Nossa equipa')}
            </p>
          </div>
        </div>

        <div
          id="espaco"
          className="md:mx-auto mx-10 h-[20rem] md:h-[30rem] rounded-none my-20 pb-10"
        >
          <p className="text-4xl text-yellow-secondary mb-5">{t('Espaço')}</p>
          <Carousel slideInterval={5000} className="mb-20">
            <img src={loja1} alt="Image of the store" />
            <img src={loja2} alt="Image of the store" />
            <img src={loja3} alt="Image of the store" />
            <img src={loja4} alt="Image of the store" />
            <img src={loja5} alt="Image of the store" />
            <img src={loja6} alt="Image of the store" />
            <img src={loja7} alt="Image of the store" />
          </Carousel>
        </div>

        <div className="md:mx-auto px-5 md:flex w-full my-10">
          <div className="md:w-1/5 my-auto">
            <img src={space1} alt="Image of the store" className="w-full p-2" />
            <img src={space2} alt="Image of the store" className="w-full p-2" />
            <img src={space3} alt="Image of the store" className="w-full p-2" />
          </div>
          <div className="md:w-1/5 my-auto">
            <img src={space4} alt="Image of the store" className="w-full p-2" />
            <img src={space5} alt="Image of the store" className="w-full p-2" />
            <img src={space6} alt="Image of the store" className="w-full p-2" />
            <img src={space7} alt="Image of the store" className="w-full p-2" />
          </div>
          <div className="md:w-1/5 my-auto">
            <img
              src={space15}
              alt="Image of the store"
              className="w-full p-2"
            />
            <img src={space9} alt="Image of the store" className="w-full p-2" />
            <img
              src={space10}
              alt="Image of the store"
              className="w-full p-2"
            />
          </div>
          <div className="md:w-1/5 my-auto">
            <img
              src={space11}
              alt="Image of the store"
              className="w-full p-2"
            />
            <img
              src={space12}
              alt="Image of the store"
              className="w-full p-2"
            />
            <img
              src={space13}
              alt="Image of the store"
              className="w-full p-2"
            />
            <img
              src={space14}
              alt="Image of the store"
              className="w-full p-2"
            />
          </div>
          <div className="md:w-1/5 my-auto">
            <img src={space8} alt="Image of the store" className="w-full p-2" />
            <img
              src={space16}
              alt="Image of the store"
              className="w-full p-2"
            />
            <img
              src={space17}
              alt="Image of the store"
              className="w-full p-2"
            />
          </div>
        </div>

        {/* 
        <div className="mx-auto flex w-full my-10">
          <div className="w-1/4 my-auto">
            <img
              src={loja1}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
            <img
              src={loja2}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
            <img
              src={loja3}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
          </div>
          <div className="w-1/4 mt-32">
            <img
              src={loja1}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
            <img
              src={loja2}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
            <img
              src={loja3}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
          </div>
          <div className="w-1/4 my-auto">
            <img
              src={loja1}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
            <img
              src={loja2}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
            <img
              src={loja3}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
          </div>
          <div className="w-1/4 mt-32">
            <img
              src={loja1}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
            <img
              src={loja2}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
            <img
              src={loja3}
              alt="Image of the store"
              className="w-full p-[1px]"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
