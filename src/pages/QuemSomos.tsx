import { Carousel } from 'flowbite-react';
import { useTranslation } from 'react-i18next';

import equipa from '../assets/img/equipa/equipa1.jpeg';
import loja1 from '../assets/img/loja/loja1.jpg';
import loja2 from '../assets/img/loja/loja2.jpg';
import loja3 from '../assets/img/loja/loja3.jpg';
import owner from '../assets/img/loja/owner.jpg';

export default function QuemSomos() {
  const { t } = useTranslation();

  return (
    <>
      <div className="md:w-11/12 w-full flex m-10">
        <div className="md:w-7/12 md:mx-0 w-full mx-10">
          <p className="text-5xl mb-5 text-yellow-secondary">
            {t('bem-vindo')}
          </p>
          <p>{t('subtitle-bem-vindo')}</p>
        </div>
      </div>

      <div className="md:w-11/12 w-full px-10 md:flex md:m-auto md:p-0">
        <p className="mt-10">{t('description1-head-office')}</p>
        <p className="mt-10">{t('description2-head-office')}</p>
      </div>

      <div className="w-11/12 mx-auto flex p-8 bg-loja1-effect bg-cover bg-center my-20 py-20 rounded-lg border-2 border-yellow-secondary">
        <div className="md:w-1/2 md:mr-0 md:ml-auto w-full">
          {/* <div className="w-2/3"> */}
          <p className="text-gray-secondary text-xl">{t('Missão')}</p>
          <p className="text-gray-secondary text-4xl my-5">
            {t('sub-title-missao')}
          </p>
          <p className="text-justify">{t('description-Missão')}</p>
        </div>
      </div>

      <div className="md:w-11/12 m-auto md:flex bg-white md:shadow-2xl md:rounded-lg">
        <p className="text-5xl mb-10 flex md:hidden py-5 text-yellow-secondary">
          {t('Nossa equipa')}
        </p>
        <div className="md:w-1/2 w-full md:mr-10">
          <img src={equipa} className="md:rounded-r-full" alt="Equipa photo" />
        </div>
        <div className="md:w-1/2 w-full md:my-auto my-10 px-10">
          <p className="text-5xl mb-10 md:flex hidden text-yellow-secondary">
            {t('Nossa equipa')}
          </p>
          <p className="text-justify pb-10">{t('description-Nossa equipa')}</p>
        </div>
      </div>

      <div className="md:w-11/12 w-full p-10 md:p-0 md:mx-auto md:flex my-20">
        <div className="md:w-1/2 w-full my-auto pr-10 text-sm">
          <p className="text-4xl mb-10 text-yellow-secondary">{t('Valores')}</p>
          <p>
            <span className="text-yellow-secondary font-bold">
              {t('Excelência')}{' '}
            </span>{' '}
            {t('description-Excelência')}
          </p>
          <p>
            <span className="text-yellow-secondary font-bold">
              {t('Ética')}{' '}
            </span>{' '}
            {t('description-Ética')}
          </p>
          <p>
            <span className="text-yellow-secondary font-bold">
              {t('Inovação')}{' '}
            </span>{' '}
            {t('description-Inovação')}
          </p>
          <p>
            <span className="text-yellow-secondary font-bold">
              {t('Atendimento ao cliente')}
            </span>{' '}
            {t('description-Atendimento ao cliente')}
          </p>
          <p>
            <span className="text-yellow-secondary font-bold">
              {t('Respeito')}{' '}
            </span>
            {t('description-Respeito')}
          </p>
          <p>
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

      <div className="w-11/12 mx-auto h-96 rounded-none mb-20 pb-10">
        <p className="text-4xl text-yellow-secondary mb-10">{t('Espaço')}</p>
        <Carousel slideInterval={5000} className="mb-20">
          <img src={loja1} alt="Image of the store" />
          <img src={loja2} alt="Image of the store" />
          <img src={loja3} alt="Image of the store" />
        </Carousel>
      </div>
    </>
  );
}
