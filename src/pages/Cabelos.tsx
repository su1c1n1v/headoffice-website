import { useTranslation } from 'react-i18next';
import ContainerEstetica from '../components/ContainerEstetica';

export default function Cabelos() {
  const { t } = useTranslation();

  return (
    <>
      <div className="md:w-9/12 xl:w-8/12 m-auto">
        <div className="md:p-0 px-10">
          <p className="text-3xl text-yellow-secondary">{t('Cabelos')}</p>
        </div>

        <div className="m-auto">
          <ContainerEstetica
            image="bg-"
            title={'Brushing'}
            subTitle={'sub-title-'}
            description={t('description-Brushing')}
          />
          <ContainerEstetica
            image="bg-"
            title={'Cor 2 em 1'}
            subTitle={'sub-title-'}
            description={t('description-Cor 2 em 1')}
            revert
          />
          <ContainerEstetica
            image="bg-"
            title={'Balayagem'}
            subTitle={'sub-title-'}
            description={t('description-Balayagem')}
            benefits={['benefit1-Balayagem', 'benefit2-Balayagem']}
          />
          <ContainerEstetica
            image="bg-"
            title={'Madeixas'}
            subTitle={'sub-title-'}
            description={t('description-Madeixas')}
            revert
          />
          <ContainerEstetica
            image="bg-"
            title={'Mechas criativas'}
            subTitle={'sub-title-'}
            description={t('description-Mechas criativas')}
          />
        </div>
      </div>
    </>
  );
}
