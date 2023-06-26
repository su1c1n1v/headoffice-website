import { useTranslation } from 'react-i18next';
import ImageContainer from '../components/ImageContainer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Cabelos() {
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
        <div className="md:p-0 px-10">
          <p className="text-3xl text-yellow-secondary">{t('Cabelos')}</p>
        </div>

        <div className="m-auto">
          <ImageContainer
            id="brushing"
            image="bg-Brushing"
            title={'Brushing'}
            subTitle={'sub-title-Brushing'}
            description={'description-Brushing'}
          />
          <ImageContainer
            image="bg-Cor-2-em-1"
            title={'Cor 2 em 1'}
            subTitle={'sub-title-Cor 2 em 1'}
            description={'description-Cor 2 em 1'}
            revert
          />
          <ImageContainer
            image="bg-Balayagem"
            title={'Balayagem'}
            subTitle={'sub-title-Balayagem'}
            description={'description-Balayagem'}
            benefits={['benefit1-Balayagem', 'benefit2-Balayagem']}
          />
          <ImageContainer
            image="bg-Madeixas"
            title={'Madeixas'}
            subTitle={'sub-title-Madeixas'}
            description={'description-Madeixas'}
            revert
          />
          <ImageContainer
            image="bg-Mechas-criativas"
            title={'Mechas criativas'}
            subTitle={'sub-title-Mechas criativas'}
            description={'description-Mechas criativas'}
          />
          <ImageContainer
            image="bg-Extensions"
            title={'Extensions'}
            subTitle={'sub-title-Extensions'}
            description={'description-Extensions'}
            revert
          />
        </div>
      </div>
    </>
  );
}
