import { InputHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  id?: string;
  title?: string;
  vartiant: ButtonType;
  children?: ReactNode;
}

export type ButtonType = 'search' | 'submit' | 'cancel';

export default function Button({
  id,
  title,
  disabled,
  vartiant,
  onClick,
  children,
  ...rest
}: ButtonProps) {
  const disabledClasses = 'disabled:bg-gray-100 disabled:opacity-50';

  const buttonClasses = {
    submit: `${disabledClasses} w-36 h-12 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2`,
    search: `${disabledClasses} w-28 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm focus:outline-none`,
    cancel: `${disabledClasses} w-36 h-12 shadow bg-white text-red-700 w-28 enabled:hover:text-white border border-red-700  enabled:hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2`,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={buttonClasses[vartiant]}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
}
