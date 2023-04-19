import { Carousel } from 'flowbite-react';
import i18n from '../services/i18n';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

export default function QuemSomos() {
  const { t } = useTranslation();

  return (
    <>
      <div className="m-auto h-80 rounded-none 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
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

      <div className="text-center text-5xl font-bold">{t('welcome')}</div>
      <div className="text-center my-3">
        <Button
          onClick={() =>
            i18n.changeLanguage(i18n.language == 'en-US' ? 'pt-PT' : 'en-US')
          }
          title={i18n.language == 'en-US' ? 'pt-PT' : 'en-US'}
          vartiant={'submit'}
        />
      </div>
    </>
  );
}
