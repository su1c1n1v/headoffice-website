import { useTranslation } from 'react-i18next';
import ImageContainer from '../../components/ImageContainer';

export default function EsteticaCorpo() {
  const { t } = useTranslation();

  return (
    <div className="md:w-11/12 xl:w-8/12 m-auto">
      <div className="m-auto md:px-0 px-10">
        <p id="Estética Corpo" className="text-3xl text-yellow-secondary">
          {t('Estética Corpo')}
        </p>
      </div>

      <div className="m-auto">
        <ImageContainer
          image="bg-drenagem-linfatica"
          title={'Drenagem linfática'}
          subTitle={'sub-title-Drenagem linfática'}
          description={'description-Drenagem linfática'}
          benefits={[
            'benefit1-Drenagem',
            'benefit2-Drenagem',
            'benefit3-Drenagem',
            'benefit4-Drenagem',
            'benefit5-Drenagem',
            'benefit6-Drenagem',
          ]}
        />
        <ImageContainer
          image="bg-radiofrequencia-corporal"
          revert
          title={'Radiofrequencia corporal'}
          subTitle={'sub-title-Radiofrequencia corporal'}
          description={'description-Radiofrequencia corporal'}
          benefits={[
            'benefit1-Radiofrequência',
            'benefit2-Radiofrequência',
            'benefit3-Radiofrequência',
            'benefit4-Radiofrequência',
            'benefit5-Radiofrequência',
          ]}
        />
        <ImageContainer
          image="bg-hifu-corporal"
          title={'Hifu corporal'}
          subTitle={'sub-title-Hifu corporal'}
          description={'description-Hifu corporal'}
          benefits={[
            'benefit1-HIFU corporal',
            'benefit2-HIFU corporal',
            'benefit3-HIFU corporal',
            'benefit4-HIFU corporal',
          ]}
        />
        <ImageContainer
          image="bg-rf-sculpt"
          revert
          title={'RF sculpt'}
          subTitle={'sub-title-RF sculpt'}
          description={'description-RF sculpt'}
          benefits={[
            'benefit1-RF sculpt',
            'benefit2-RF sculpt',
            'benefit3-RF sculpt',
            'benefit4-RF sculpt',
          ]}
        />
        <ImageContainer
          image="bg-vela-shape-corporal"
          title={'Vela shape'}
          subTitle={'sub-title-Vela shape'}
          description={'description-Vela shape'}
          benefits={[
            'benefit1-VelaShape',
            'benefit2-VelaShape',
            'benefit3-VelaShape',
            'benefit4-VelaShape',
            'benefit5-VelaShape',
          ]}
        />
        <ImageContainer
          image="bg-laser-podologico"
          revert
          title={'Laiser podológico'}
          subTitle={'sub-title-Laiser podológico'}
          description={'description-Laiser podológico'}
          benefits={[
            'benefit1-Laiser podológico',
            'benefit2-Laiser podológico',
            'benefit3-Laiser podológico',
            'benefit4-Laiser podológico',
            'benefit5-Laiser podológico',
          ]}
        />
        <ImageContainer
          image="bg-pressoterapia"
          title={'Pressoterapia'}
          subTitle={'sub-title-Pressoterapia'}
          description={'description-Pressoterapia'}
          benefits={[
            'benefit1-Pressoterapia',
            'benefit2-Pressoterapia',
            'benefit3-Pressoterapia',
            'benefit4-Pressoterapia',
            'benefit5-Pressoterapia',
            'benefit6-Pressoterapia',
            'benefit7-Pressoterapia',
          ]}
        />
        <ImageContainer
          image="bg-lipolaser"
          revert
          title={'Lipolaser'}
          subTitle={'sub-title-Lipolaser'}
          description={'description-Lipolaser'}
          benefits={[
            'benefit1-Lipolaser',
            'benefit2-Lipolaser',
            'benefit3-Lipolaser',
          ]}
        />
      </div>
    </div>
  );
}
