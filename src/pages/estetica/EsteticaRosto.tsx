import { t } from 'i18next';
import ContainerEstetica from '../../components/ContainerEstetica';

export default function EsteticaRosto() {
  return (
    <div className="md:w-11/12 xl:w-8/12 m-auto">
      <div id="Estética Rosto" className="md:p-0 px-10">
        <p className="text-3xl text-yellow-secondary">{t('Estética Rosto')}</p>
      </div>

      <div className="m-auto">
        <ContainerEstetica
          image="bg-limpeza-pele"
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
          image="bg-aquapeel"
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
          image="bg-radiofrequencia"
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
          image="bg-peelings-quimicos"
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
          image="bg-velashape-rosto"
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
