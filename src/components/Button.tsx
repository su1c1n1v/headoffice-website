import { InputHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  id?: string;
  title?: string;
  vartiant: ButtonType;
  children?: ReactNode;
  type?: 'submit' | 'button';
}

export type ButtonType = 'search' | 'submit' | 'black' | 'cancel';

export default function Button({
  title,
  type,
  vartiant,
  children,
  ...rest
}: ButtonProps) {
  const disabledClasses = 'disabled:bg-gray-100 disabled:opacity-50';

  const buttonClasses = {
    main: `${disabledClasses} w-36 h-12 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2`,
    submit: `${disabledClasses} w-36 h-12 focus:outline-none text-white bg-yellow-secondary hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-400 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2`,
    search: `${disabledClasses} w-36 h-8 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200`,
    cancel: `${disabledClasses} w-36 h-12 shadow bg-white text-red-700 w-28 enabled:hover:text-white border border-red-700  enabled:hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2`,
    black: `${disabledClasses} text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2`,
  };

  return (
    <button type={type} className={buttonClasses[vartiant]} {...rest}>
      {title}
      {children}
    </button>
  );
}
