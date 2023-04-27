import { t } from 'i18next';
import ContainerEstetica from '../components/ContainerEstetica';

export default function Estetica() {
  return (
    <div className="md:w-9/12 xl:w-8/12 m-auto">
      <div className="md:flex mt-5 mx-10 md:mx-0 mb-10 text-xl text-yellow-secondary">
        <a
          className="md:pr-4 md:py-4 font-normal flex hover:text-black duration-300"
          href="#Cuidados de Beleza"
        >
          <div className="rounded-full mr-2 bg-gray-primary w-2 h-2 flex my-auto"></div>
          {t('Cuidados de Beleza')}
        </a>

        <a
          className="md:p-4 font-normal flex hover:text-black duration-300"
          href="#Estética Rosto"
        >
          <div className="rounded-full mr-2 bg-gray-primary w-2 h-2 flex my-auto"></div>
          {t('Estética Rosto')}
        </a>
        <a
          className="md:py-4 md:p-4 font-normal hover:text-black duration-300 flex"
          href="#Estética Corpo"
        >
          <div className="rounded-full mr-2 bg-gray-primary w-2 h-2 flex my-auto"></div>
          {t('Estética Corpo')}
        </a>
      </div>

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
        />
        <ContainerEstetica
          image="bg-manicure1"
          revert
          title={t('Radiofrequencia corporal')}
          subTitle={t('sub-title-Radiofrequencia corporal')}
          description={t('description-Radiofrequencia corporal')}
        />
        <ContainerEstetica
          image="bg-hifu1"
          title={t('Hifu corporal')}
          subTitle={t('sub-title-Hifu corporal')}
          description={t('description-Hifu corporal')}
        />
        <ContainerEstetica
          image="bg-rf-sculpt1"
          revert
          title={t('RF sculpt')}
          subTitle={t('sub-title-RF sculpt')}
          description={t('description-RF sculpt')}
        />
        <ContainerEstetica
          image="bg-estetica3"
          title={t('Vela shape')}
          subTitle={t('sub-title-Vela shape')}
          description={t('description-Vela shape')}
        />
        <ContainerEstetica
          image="bg-estetica2"
          revert
          title={t('Laiser podológico')}
          subTitle={t('sub-title-Laiser podológico')}
          description={t('description-Laiser podológico')}
        />
        <ContainerEstetica
          image="bg-estetica-medica2"
          title={t('Pressoterapia')}
          subTitle={t('sub-title-Pressoterapia')}
          description={t('description-Pressoterapia')}
        />
        <ContainerEstetica
          image="bg-lipo1"
          revert
          title={t('Lipolaser')}
          subTitle={t('sub-title-Lipolaser')}
          description={t('description-Lipolaser')}
        />
      </div>

      <div id="Cuidados de Beleza" className="md:p-0 px-10">
        <p className="text-3xl text-yellow-secondary">
          {t('Cuidados de Beleza')}
        </p>
      </div>

      <div className="m-auto">
        <ContainerEstetica
          image="bg-manicure1"
          title={'Manicure'}
          subTitle={'subtitle-Manicure'}
          description={t('description-Manicure')}
        />
        <ContainerEstetica
          image="bg-estetica4"
          revert
          title={t('Unhas de gel')}
          subTitle={t('subtitle-Unhas de gel')}
          description={t('description-Unhas de gel')}
        />
        <ContainerEstetica
          image="bg-"
          title={t('Verniz Gel')}
          subTitle={t('subtitle-Verniz Gel')}
          description={t('description-Verniz Gel')}
        />
        <ContainerEstetica
          image="bg-estetica5"
          revert
          title={t('Pedicure')}
          subTitle={t('subtitle-Pedicure')}
          description={t('description-Pedicure')}
        />
        <ContainerEstetica
          image="bg-"
          title={t('Massagem')}
          subTitle={t('subtitle-Massagem')}
          description={t('description-Massagem')}
        />
        <ContainerEstetica
          image="bg-estetica6"
          revert
          title={t('Delipação cera/linha')}
          subTitle={t('subtitle-Delipação cera/linha')}
          description={t('description-Delipação cera/linha')}
        />
        <ContainerEstetica
          image="bg-estetica9"
          title={t('Epilação laiser')}
          subTitle={t('subtitle-Epilação laiser')}
          description={t('description-Epilação laiser')}
        />
        <ContainerEstetica
          image="bg-estetica7"
          revert
          title={t('Micropigmentação ou tatuagem semi-permanente')}
          subTitle={t('subtitle-Micropigmentação ou tatuagem semi-permanente')}
          description={t(
            'description-Micropigmentação ou tatuagem semi-permanente'
          )}
        />
        <ContainerEstetica
          image="bg-estetica8"
          title={t(
            'Hidragloss - Hidratação profunda dos lábios com ácido hialuronico'
          )}
          subTitle={t(
            'subtitle-Hidragloss - Hidratação profunda dos lábios com ácido hialuronico'
          )}
          description={t(
            'description-Hidragloss - Hidratação profunda dos lábios com ácido hialuronico'
          )}
        />
        <ContainerEstetica
          image="bg-estetica10"
          revert
          title={t('Lash Lifting - Alinhamento e definição de pestanas')}
          subTitle={t(
            'subtitle-Lash Lifting - Alinhamento e definição de pestanas'
          )}
          description={t(
            'description-Lash Lifting - Alinhamento e definição de pestanas'
          )}
        />
        <ContainerEstetica
          image="bg-estetica11"
          title={t('Brow Lamination - Sobrancelhas permanente até 40 dias')}
          subTitle={t(
            'subtitle-Brow Lamination - Sobrancelhas permanente até 40 dias'
          )}
          description={t(
            'description-Brow Lamination - Sobrancelhas permanente até 40 dias'
          )}
        />
      </div>

      <div id="Estética Rosto" className="md:p-0 px-10">
        <p className="text-3xl text-yellow-secondary">{t('Estética Rosto')}</p>
      </div>

      <div className="m-auto">
        <ContainerEstetica
          image="bg-estetica10"
          title={'Limpeza de Pele'}
          subTitle={'sub-title-Limpeza de Pele'}
          description={t('description-Limpeza de Pele')}
          benefits={[
            'benefit1-Limpeza de Pele',
            'benefit2-Limpeza de Pele',
            'benefit3-Limpeza de Pele',
            'benefit4-Limpeza de Pele',
            'benefit5-Limpeza de Pele',
            'benefit6-Limpeza de Pele',
            'benefit7-Limpeza de Pele',
            'benefit8-Limpeza de Pele',
          ]}
        />
        <ContainerEstetica
          image="bg-"
          title={'Aquapeel'}
          subTitle={'sub-title-Aquapeel'}
          description={t('description-Aquapeel')}
          revert
          benefits={[
            'benefit1-aguapeel',
            'benefit2-aguapeel',
            'benefit3-aguapeel',
            'benefit4-aguapeel',
            'benefit5-aguapeel',
            'benefit6-aguapeel',
            'benefit7-aguapeel',
          ]}
        />
        <ContainerEstetica
          image="bg-"
          title={'Radiofrequencia'}
          subTitle={'sub-title-Radiofrequencia'}
          description={t('description-Radiofrequencia')}
          benefits={[
            'benefit1-radiofrequencia',
            'benefit2-radiofrequencia',
            'benefit3-radiofrequencia',
            'benefit4-radiofrequencia',
            'benefit5-radiofrequencia',
          ]}
        />
        <ContainerEstetica
          image="bg-estetica12"
          title={'Hifu'}
          subTitle={'sub-title-Hifu'}
          revert
          description={t('description-Hifu')}
          benefits={[
            'benefit1-hifu',
            'benefit2-hifu',
            'benefit3-hifu',
            'benefit4-hifu',
            'benefit5-hifu',
            'benefit6-hifu',
            'benefit7-hifu',
            'benefit8-hifu',
          ]}
        />
        <ContainerEstetica
          image="bg-"
          title={'Peelings químicos'}
          subTitle={'sub-title-Peelings químicos'}
          description={t('description-Peelings químicos')}
          benefits={[
            'benefit1-peelings',
            'benefit2-peelings',
            'benefit3-peelings',
            'benefit4-peelings',
            'benefit5-peelings',
          ]}
        />
        <ContainerEstetica
          image="bg-"
          title={'Velashape rosto'}
          subTitle={'sub-title-Velashape rosto'}
          revert
          description={t('description-Velashape rosto')}
          benefits={[
            'benefit1-velashape',
            'benefit2-velashape',
            'benefit3-velashape',
            'benefit4-velashape',
            'benefit5-velashape',
            'benefit6-velashape',
          ]}
        />
      </div>
    </div>
  );
}
