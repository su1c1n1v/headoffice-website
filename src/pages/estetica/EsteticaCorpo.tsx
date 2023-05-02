import { t } from 'i18next';
import ContainerEstetica from '../../components/ContainerEstetica';

export default function EsteticaCorpo() {
  return (
    <div className="md:w-9/12 xl:w-8/12 m-auto">
      <div className="m-auto md:px-0 px-10">
        <p id="Estética Corpo" className="text-3xl text-yellow-secondary">
          {t('Estética Corpo')}
        </p>
      </div>

      <div className="m-auto">
        <ContainerEstetica
          image="bg-drenagem1"
          title={t('Drenagem linfática')}
          subTitle={t('sub-title-Drenagem linfática')}
          description={t('description-Drenagem linfática')}
          benefits={[
            'benefit1-Drenagem',
            'benefit2-Drenagem',
            'benefit3-Drenagem',
            'benefit4-Drenagem',
            'benefit5-Drenagem',
            'benefit6-Drenagem',
            'benefit7-Drenagem',
            'benefit8-Drenagem',
          ]}
        />
        <ContainerEstetica
          image="bg-Radiofrequência-corporal"
          revert
          title={t('Radiofrequencia corporal')}
          subTitle={t('sub-title-Radiofrequencia corporal')}
          description={t('description-Radiofrequencia corporal')}
          benefits={[
            'benefit1-Radiofrequência',
            'benefit2-Radiofrequência',
            'benefit3-Radiofrequência',
            'benefit4-Radiofrequência',
            'benefit5-Radiofrequência',
          ]}
        />
        <ContainerEstetica
          image="bg-hifu1"
          title={t('Hifu corporal')}
          subTitle={t('sub-title-Hifu corporal')}
          description={t('description-Hifu corporal')}
          benefits={[
            'benefit1-HIFU corporal',
            'benefit2-HIFU corporal',
            'benefit3-HIFU corporal',
            'benefit4-HIFU corporal',
          ]}
        />
        <ContainerEstetica
          image="bg-rf-sculpt1"
          revert
          title={t('RF sculpt')}
          subTitle={t('sub-title-RF sculpt')}
          description={t('description-RF sculpt')}
          benefits={[
            'benefit1-RF sculpt',
            'benefit2-RF sculpt',
            'benefit3-RF sculpt',
            'benefit4-RF sculpt',
            'benefit5-RF sculpt',
          ]}
        />
        <ContainerEstetica
          image="bg-estetica3"
          title={t('Vela shape')}
          subTitle={t('sub-title-Vela shape')}
          description={t('description-Vela shape')}
          benefits={[
            'benefit1-VelaShape',
            'benefit2-VelaShape',
            'benefit3-VelaShape',
            'benefit4-VelaShape',
            'benefit5-VelaShape',
            'benefit6-VelaShape',
          ]}
        />
        <ContainerEstetica
          image="bg-estetica2"
          revert
          title={t('Laiser podológico')}
          subTitle={t('sub-title-Laiser podológico')}
          description={t('description-Laiser podológico')}
          benefits={[
            'benefit1-Laiser podológico',
            'benefit2-Laiser podológico',
            'benefit3-Laiser podológico',
            'benefit4-Laiser podológico',
            'benefit5-Laiser podológico',
          ]}
        />
        <ContainerEstetica
          image="bg-estetica-medica2"
          title={t('Pressoterapia')}
          subTitle={t('sub-title-Pressoterapia')}
          description={t('description-Pressoterapia')}
          benefits={[
            'benefit1-Pressoterapia',
            'benefit2-Pressoterapia',
            'benefit3-Pressoterapia',
            'benefit4-Pressoterapia',
            'benefit5-Pressoterapia',
            'benefit6-Pressoterapia',
            'benefit7-Pressoterapia',
            'benefit8-Pressoterapia',
            'benefit9-Pressoterapia',
          ]}
        />
        <ContainerEstetica
          image="bg-Lipolaser"
          revert
          title={t('Lipolaser')}
          subTitle={t('sub-title-Lipolaser')}
          description={t('description-Lipolaser')}
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
