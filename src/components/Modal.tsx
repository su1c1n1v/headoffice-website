import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

type Props = {
  close?: boolean;
  description?: string;
  title?: string;
};

export default function Modal({ close, description, title }: Props) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(close);

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm bg-white p-5 border rounded-xl shadow-xl">
            {/* <Dialog.Panel className="w-full max-w-sm bg-green-200 p-5 border border-green-400 rounded-xl shadow-xl"> */}
            <Dialog.Title className={'font-bold text-lg'}>
              {title && t(title)}
            </Dialog.Title>
            <Dialog.Description className={'text-gray-500 mt-4'}>
              {description && t(description)}
            </Dialog.Description>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-5 text-blue-700 border bg-blue-200 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Got it, thanks!
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
