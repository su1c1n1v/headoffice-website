import { useTranslation } from 'react-i18next';
import ContainerEstetica from '../components/ContainerEstetica';

export default function MedicinaEstetica() {
  const { t } = useTranslation();

  return (
    <div className="md:w-11/12 xl:w-8/12 m-auto">
      <div className="md:p-0 px-10">
        <p className="text-3xl text-yellow-secondary">
          {t('Medicina Estética')}
        </p>
      </div>

      <div className="m-auto">
        <ContainerEstetica
          image="bg-acido-hialuronico"
          title={'Ácido hialurónico'}
          subTitle={'sub-title-Ácido hialurónico'}
          description={t('description-Ácido hialurónico')}
          benefits={[
            'benefit1-Ácido hialurónico',
            'benefit2-Ácido hialurónico',
            'benefit3-Ácido hialurónico',
            'benefit4-Ácido hialurónico',
          ]}
        />
        <ContainerEstetica
          image="bg-botox"
          title={'Toxina botulínica'}
          subTitle={'sub-title-Toxina botulínica'}
          revert
          description={t('description-Toxina botulínica')}
          benefits={[
            'benefit1-Toxina botulínica',
            'benefit2-Toxina botulínica',
            'benefit3-Toxina botulínica',
            'benefit4-Toxina botulínica',
            'benefit5-Toxina botulínica',
            'benefit6-Toxina botulínica',
            'benefit7-Toxina botulínica',
          ]}
        />
        <ContainerEstetica
          image="bg-Fios-tensores"
          title={'Fios tensores'}
          subTitle={'sub-title-Fios tensores'}
          description={t('description-Fios tensores')}
          benefits={[
            'benefit1-Fios tensores',
            'benefit2-Fios tensores',
            'benefit3-Fios tensores',
            'benefit4-Fios tensores',
            'benefit5-Fios tensores',
            'benefit6-Fios tensores',
            'benefit7-Fios tensores',
          ]}
        />
        <ContainerEstetica
          image="bg-Biostimulatores-de-colagénio bg-right"
          title={'Biostimulators de colagénio'}
          subTitle={'sub-title-Biostimulators de colagénio'}
          description={t('description-Biostimulators de colagénio')}
          revert
          benefits={[
            'benefit1-Biostimulators de colagénio',
            'benefit2-Biostimulators de colagénio',
            'benefit3-Biostimulators de colagénio',
            'benefit4-Biostimulators de colagénio',
            'benefit5-Biostimulators de colagénio',
            'benefit6-Biostimulators de colagénio',
            'benefit7-Biostimulators de colagénio',
            'benefit8-Biostimulators de colagénio',
          ]}
        />
      </div>
    </div>
  );
}
