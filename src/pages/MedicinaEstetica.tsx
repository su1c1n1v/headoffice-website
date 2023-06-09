import { useTranslation } from 'react-i18next';
import ImageContainer from '../components/ImageContainer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MedicinaEstetica() {
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
    <div className="md:w-11/12 xl:w-8/12 m-auto">
      <div className="md:p-0 px-10">
        <p className="text-3xl text-yellow-secondary">
          {t('Medicina Estética')}
        </p>
      </div>

      <div className="m-auto">
        <ImageContainer
          image="bg-acido-hialuronico"
          title={'Ácido hialurónico'}
          subTitle={'sub-title-Ácido hialurónico'}
          description={'description-Ácido hialurónico'}
          benefits={[
            'benefit1-Ácido hialurónico',
            'benefit2-Ácido hialurónico',
            'benefit3-Ácido hialurónico',
            'benefit4-Ácido hialurónico',
          ]}
        />
        <ImageContainer
          image="bg-botox"
          title={'Toxina botulínica'}
          subTitle={'sub-title-Toxina botulínica'}
          revert
          description={'description-Toxina botulínica'}
          benefits={[
            'benefit1-Toxina botulínica',
            'benefit2-Toxina botulínica',
            'benefit3-Toxina botulínica',
            'benefit4-Toxina botulínica',
            'benefit5-Toxina botulínica',
            'benefit6-Toxina botulínica',
          ]}
        />
        <ImageContainer
          image="bg-Fios-tensores"
          title={'Fios tensores'}
          subTitle={'sub-title-Fios tensores'}
          description={'description-Fios tensores'}
          benefits={[
            'benefit1-Fios tensores',
            'benefit2-Fios tensores',
            'benefit3-Fios tensores',
            'benefit4-Fios tensores',
          ]}
        />
        <ImageContainer
          id="biestimuladores-de-colagenio"
          image="bg-Biostimulatores-de-colagénio bg-right"
          title={'Biostimulators de colagénio'}
          subTitle={'sub-title-Biostimulators de colagénio'}
          description={'description-Biostimulators de colagénio'}
          revert
          benefits={[
            'benefit1-Biostimulators de colagénio',
            'benefit2-Biostimulators de colagénio',
            'benefit3-Biostimulators de colagénio',
            'benefit4-Biostimulators de colagénio',
            'benefit5-Biostimulators de colagénio',
            'benefit6-Biostimulators de colagénio',
          ]}
        />
      </div>
    </div>
  );
}
