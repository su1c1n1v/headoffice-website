import { t } from 'i18next';
import ImageContainer from '../../components/ImageContainer';

export default function CuidadosBeleza() {
  return (
    <div className="md:w-11/12 xl:w-8/12 m-auto">
      <div id="Cuidados de Beleza" className="md:p-0 px-10">
        <p className="text-3xl text-yellow-secondary">
          {t('Cuidados de Beleza')}
        </p>
      </div>

      <div className="m-auto">
        <ImageContainer
          image="bg-Manicure"
          title={'Manicure'}
          subTitle={'subtitle-Manicure'}
          description={'description-Manicure'}
        />
        <ImageContainer
          image="bg-Unha-de-gel"
          revert
          title={'Unhas de gel'}
          subTitle={'subtitle-Unhas de gel'}
          description={'description-Unhas de gel'}
        />
        <ImageContainer
          image="bg-Verniz-gel"
          title={'Verniz Gel'}
          subTitle={'subtitle-Verniz Gel'}
          description={'description-Verniz Gel'}
        />
        <ImageContainer
          image="bg-Pedicure"
          revert
          title={'Pedicure'}
          subTitle={'subtitle-Pedicure'}
          description={'description-Pedicure'}
        />
        <ImageContainer
          image="bg-Massagem"
          title={'Massagem'}
          subTitle={'subtitle-Massagem'}
          description={'description-Massagem'}
        />
        <ImageContainer
          image="bg-Delipação-cera/linha"
          revert
          title={'Delipação cera/linha'}
          subTitle={'subtitle-Delipação cera/linha'}
          description={'description-Delipação cera/linha'}
        />
        <ImageContainer
          image="bg-Epilação-laser"
          title={'Epilação laiser'}
          subTitle={'subtitle-Epilação laiser'}
          description={'description-Epilação laiser'}
        />
        <ImageContainer
          image="bg-Micropigmentação-ou-tatuagem-semi-permanente"
          revert
          title={'Micropigmentação ou tatuagem semi-permanente'}
          subTitle={'subtitle-Micropigmentação ou tatuagem semi-permanente'}
          description={
            'description-Micropigmentação ou tatuagem semi-permanente'
          }
        />
        <ImageContainer
          image="bg-Hidragloss"
          title={
            'Hidragloss - Hidratação profunda dos lábios com ácido hialuronico'
          }
          subTitle={
            'subtitle-Hidragloss - Hidratação profunda dos lábios com ácido hialuronico'
          }
          description={
            'description-Hidragloss - Hidratação profunda dos lábios com ácido hialuronico'
          }
        />
        <ImageContainer
          image="bg-Lash-Lifting"
          revert
          title={'Lash Lifting - Alinhamento e definição de pestanas'}
          subTitle={
            'subtitle-Lash Lifting - Alinhamento e definição de pestanas'
          }
          description={
            'description-Lash Lifting - Alinhamento e definição de pestanas'
          }
        />
        <ImageContainer
          image="bg-Brow-Lamination"
          title={'Brow Lamination - Sobrancelhas permanente até 40 dias'}
          subTitle={
            'subtitle-Brow Lamination - Sobrancelhas permanente até 40 dias'
          }
          description={
            'description-Brow Lamination - Sobrancelhas permanente até 40 dias'
          }
        />
      </div>
    </div>
  );
}
