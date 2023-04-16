import InputText from '../components/inputs/InputText';
import Label from '../components/Label';
import InputTextArea from '../components/inputs/InputTextArea';
import InputSelect from '../components/inputs/InputSelect';
import Button from '../components/Button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import ErrorMessages from '../components/ErrorMessages';
import { Modal, Toast } from 'flowbite-react';
import React, { ReactNode, useState } from 'react';

export default function Contatos() {
  const [showModal, setShowModal] = useState(false);
  const [toasts, setToasts] = useState<ReactNode[]>([]);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const validationSchema = z.object({
    name: z.string().min(1, { message: 'Campo obrigatório' }),
    subject: z.string().min(1, { message: 'Campo obrigatório' }),
    message: z.string().min(1, { message: 'Campo obrigatório' }),
    email: z.string().min(1, { message: 'Campo obrigatório' }).email({
      message: 'E-mail invalido',
    }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const sentMessage = async (value: any) => {
    console.log('Name: ', value.name);
    console.log('email: ', value.email);
    console.log('subject: ', value.subject);
    console.log('message: ', value.message);

    setToasts([
      <Toast className="my-5 bg-green-200 border border-green-400">
        <div className="mx-5 w-[30rem] text-sm font-normal">
          Menssagem enviada com sucesso!
        </div>
        <Toast.Toggle />
      </Toast>,
      ...toasts,
    ]);

    reset();

    await timeout(1500);
    setShowModal(false);
  };
  return (
    <>
      <div className="space-x-4 divide-x divide-gray-200 absolute top-10 right-10">
        {toasts.map((x) => x)}
      </div>

      <div className="w-5/6 m-auto flex p-5">
        <div className="w-1/2">
          <h3 className="font-semibold text-yellow-secondary text-3xl my-10">
            Fale conosco
          </h3>
          <p className="w-3/4">
            Envie-nos as suas perguntas, solicitações ou comentários. Teremos o
            maior prazer em conversar consigo, e a nossa equipa de apoio ao
            cliente responderá a todas as suas perguntas.
          </p>
        </div>

        {/* Form */}
        <form
          className="w-1/2 mb-5 border-2 bg-white shadow-xl"
          onSubmit={handleSubmit(sentMessage)}
        >
          <div className="mx-10 mb-5 mt-10">
            <Label title={'Nome'} required />
            <InputText
              type="text"
              id="name"
              ref2={register('name').ref}
              placeholder={'Forneça seu nome'}
              {...register('name')}
            />

            <ErrorMessages
              isValid={errors.name?.message == undefined}
              errorMessage={errors.name?.message?.toString()}
            />
          </div>
          <div className="mx-10 my-5">
            <Label title={'E-mail'} required />
            <InputText
              id="email"
              ref2={register('email').ref}
              {...register('email')}
              placeholder={'Forneça seu e-mail'}
            />

            <ErrorMessages
              isValid={errors.email?.message == undefined}
              errorMessage={errors.email?.message?.toString()}
            />
          </div>
          <div className="mx-10 my-5">
            <Label title={'Assunto'} required />
            <InputSelect
              ref2={register('subject').ref}
              {...register('subject')}
              defaultValue={''}
              placeholder={'Escolha o assunto'}
              options={['Marcação', 'Dúvidas', 'Avaliação']}
            />

            <ErrorMessages
              isValid={errors.subject?.message == undefined}
              errorMessage={errors.subject?.message?.toString()}
            />
          </div>
          <div className="mx-10 my-5">
            <Label title={'Mensagem'} required />
            <InputTextArea
              ref2={register('message').ref}
              rows={4}
              placeholder={'Escreva a mensagem'}
              {...register('message')}
            />

            <ErrorMessages
              isValid={errors.message?.message == undefined}
              errorMessage={errors.message?.message?.toString()}
            />
          </div>
          <div className="m-10">
            <Button type={'submit'} title="Enviar" vartiant={'submit'} />
            <p className="text-xs">
              Prometemos não utilizar suas informações de contato para enviar
              qualquer tipo de SPAM.
            </p>
          </div>
        </form>
      </div>

      <div className="w-5/6 m-auto py-4">
        <p className="font-semibold py-4 text-3xl text-yellow-secondary">
          Localização
        </p>
        <iframe
          className="w-full h-52 shadow-2xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12018.570738231974!2d-8.6397294!3d41.1423256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246515c826f109%3A0x3fe9bcae29ce6bc0!2sHeadOffice!5e0!3m2!1sen!2spt!4v1681665525413!5m2!1sen!2spt"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <React.Fragment>
        <Modal dismissible={true} show={showModal}>
          <Modal.Body>
            <div className="space-y-6">Menssagem enviada com sucesso</div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </>
  );
}
