import { InputHTMLAttributes, LegacyRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref2?: LegacyRef<HTMLInputElement>;
}

export default function InputText({
  placeholder,
  className,
  ref2,
  ...rest
}: InputProps) {
  return (
    <>
      <input
        {...rest}
        ref={ref2}
        type="text"
        className={`focus:outline-none focus:ring hover:bg-gray-100 focus:ring-gray-300 bg-gray-50 border focus:border-gray-200 border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-primary block w-full p-2 ${className}`}
        placeholder={placeholder}
      />
    </>
  );
}
