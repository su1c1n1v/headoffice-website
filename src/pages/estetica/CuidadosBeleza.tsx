import { t } from 'i18next';
import ContainerEstetica from '../../components/ContainerEstetica';

export default function CuidadosBeleza() {
  return (
    <div className="md:w-9/12 xl:w-8/12 m-auto">
      <div id="Cuidados de Beleza" className="md:p-0 px-10">
        <p className="text-3xl text-yellow-secondary">
          {t('Cuidados de Beleza')}
        </p>
      </div>

      <div className="m-auto">
        <ContainerEstetica
          image="bg-Manicure"
          title={'Manicure'}
          subTitle={'subtitle-Manicure'}
          description={t('description-Manicure')}
        />
        <ContainerEstetica
          image="bg-Unha-de-gel"
          revert
          title={t('Unhas de gel')}
          subTitle={t('subtitle-Unhas de gel')}
          description={t('description-Unhas de gel')}
        />
        <ContainerEstetica
          image="bg-Verniz-gel"
          title={t('Verniz Gel')}
          subTitle={t('subtitle-Verniz Gel')}
          description={t('description-Verniz Gel')}
        />
        <ContainerEstetica
          image="bg-Pedicure"
          revert
          title={t('Pedicure')}
          subTitle={t('subtitle-Pedicure')}
          description={t('description-Pedicure')}
        />
        <ContainerEstetica
          image="bg-Massagem"
          title={t('Massagem')}
          subTitle={t('subtitle-Massagem')}
          description={t('description-Massagem')}
        />
        <ContainerEstetica
          image="bg-Delipação-cera/linha"
          revert
          title={t('Delipação cera/linha')}
          subTitle={t('subtitle-Delipação cera/linha')}
          description={t('description-Delipação cera/linha')}
        />
        <ContainerEstetica
          image="bg-Epilação-laser"
          title={t('Epilação laiser')}
          subTitle={t('subtitle-Epilação laiser')}
          description={t('description-Epilação laiser')}
        />
        <ContainerEstetica
          image="bg-Micropigmentação-ou-tatuagem-semi-permanente"
          revert
          title={t('Micropigmentação ou tatuagem semi-permanente')}
          subTitle={t('subtitle-Micropigmentação ou tatuagem semi-permanente')}
          description={t(
            'description-Micropigmentação ou tatuagem semi-permanente'
          )}
        />
        <ContainerEstetica
          image="bg-Hidragloss"
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
          image="bg-Lash-Lifting"
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
          image="bg-Brow-Lamination"
          title={t('Brow Lamination - Sobrancelhas permanente até 40 dias')}
          subTitle={t(
            'subtitle-Brow Lamination - Sobrancelhas permanente até 40 dias'
          )}
          description={t(
            'description-Brow Lamination - Sobrancelhas permanente até 40 dias'
          )}
        />
      </div>
    </div>
  );
}
