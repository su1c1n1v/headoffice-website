import InputText from '../components/inputs/InputText';
import Label from '../components/Label';
import InputTextArea from '../components/inputs/InputTextArea';
import InputSelect from '../components/inputs/InputSelect';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import ErrorMessages from '../components/ErrorMessages';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Toast } from 'flowbite-react';
import { ReactNode, useState } from 'react';
import { t } from 'i18next';
import { InferType } from 'yup';
import Modal from '../components/Modal';

export default function Contatos() {
  const [toasts, setToasts] = useState<ReactNode>();

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('Campo obrigatório').toString()),
    subject: yup.string().required(t('Campo obrigatório').toString()),
    message: yup.string().required(t('Campo obrigatório').toString()),
    phoneNumber: yup
      .string()
      .matches(/^\+{0,1}[0-9]{0,3}[0-9]{9,12}$/, 'Número de telefone invalido')
      .min(1, 'Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email('E-mail invalido'),
  });

  type ValidationSchema = InferType<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ValidationSchema>({
    resolver: yupResolver(validationSchema),
  });

  const sentMessage = async () => {
    setToasts(
      <Toast className="my-5 bg-green-200 border border-green-400">
        <div className="mx-5 w-[30rem] text-sm font-normal">
          {t('Menssagem sucesso')}
        </div>
        <Toast.Toggle />
      </Toast>
    );

    reset();
  };
  return (
    <>
      <div className="w-full md:w-11/12 xl:w-8/12 m-auto md:flex md:p-5 p-10 pt-0">
        <div className="md:w-1/2 w-full mb-10 ">
          <h3 className="text-center md:text-left font-semibold text-yellow-secondary text-3xl my-10">
            {t('Fale conosco')}
          </h3>
          <p className="w-full md:w-3/4">{t('description-Fale conosco')}</p>
        </div>

        {/* Form */}
        <form
          className="w-full md:w-1/2 border-2 bg-white shadow-xl"
          onSubmit={handleSubmit(sentMessage)}
        >
          <div className="mx-10 mb-5 mt-10">
            <Label title={t('Nome')} required />
            <InputText
              type="text"
              ref2={register('name').ref}
              placeholder={t('placeholder-nome').toString()}
              {...register('name')}
            />
            <ErrorMessages
              isValid={errors.name?.message === undefined}
              errorMessage={errors.name?.message?.toString()}
            />
          </div>
          <div className="mx-10 my-5">
            <Label title={t('E-mail')} required />
            <InputText
              ref2={register('email').ref}
              placeholder={t('placeholder-email').toString()}
              {...register('email')}
            />

            <ErrorMessages
              isValid={errors.email?.message === undefined}
              errorMessage={errors.email?.message?.toString()}
            />
          </div>

          <div className="mx-10 my-5">
            <Label title={t('Número de Telefone')} required />
            <InputText
              ref2={register('phoneNumber').ref}
              placeholder={t('placeholder-phonenumber').toString()}
              {...register('phoneNumber')}
            />

            <ErrorMessages
              isValid={errors.phoneNumber?.message === undefined}
              errorMessage={errors.phoneNumber?.message?.toString()}
            />
          </div>

          <div className="mx-10 my-5">
            <Label title={t('Assunto')} required />
            <InputSelect
              ref2={register('subject').ref}
              defaultValue={''}
              {...register('subject')}
              placeholder={t('placeholder-assunto').toString()}
              options={['Marcação', 'Dúvidas', 'Avaliação']}
            />

            <ErrorMessages
              isValid={errors.subject?.message === undefined}
              errorMessage={errors.subject?.message?.toString()}
            />
          </div>
          <div className="mx-10 my-5">
            <Label title={t('Menssagem')} required />
            <InputTextArea
              ref2={register('message').ref}
              rows={4}
              {...register('message')}
              placeholder={t('placeholder-messagem').toString()}
            />

            <ErrorMessages
              isValid={errors.message?.message === undefined}
              errorMessage={errors.message?.message?.toString()}
            />
          </div>
          <div className="m-10">
            <Button
              type={'submit'}
              title={t('Enviar').toString()}
              vartiant={'submit'}
              onClick={() => console.log('ISValid: ', isValid)}
            />
            <p className="text-xs">{t('span')}</p>
          </div>
        </form>
      </div>
      <Modal
        close={true}
        title="Pedido"
        description="Mensagem enviado com sucesso!"
      />
    </>
  );
}
