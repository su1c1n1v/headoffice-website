import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as EmailSent } from '../assets/img/emails-sent.svg';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
  description?: string;
  title?: string;
  buttonCloseTitle?: string;
  buttonClose?: boolean;
};

export default function Modal({ isOpen, setIsOpen, description, title, buttonCloseTitle, buttonClose }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-[1000] duration-500"
      >

        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm bg-white p-6 border-2 rounded-xl shadow-xl">
            <Dialog.Title className={'font-bold text-lg'}>
              {title && t(title)}
            </Dialog.Title>
            <Dialog.Description className={'text-gray-500 mt-4'}>
              {description && t(description)}
              <EmailSent className='w-40 h-auto mx-auto my-6' />
            </Dialog.Description>
            {buttonClose &&
              <div className='m-auto text-center'>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-5 text-blue-700 border bg-blue-200 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  {buttonCloseTitle && t(buttonCloseTitle)}
                </button>
              </div>
            }
          </Dialog.Panel>
        </div>
      </Dialog></>
  );
}
