import { InputHTMLAttributes, LegacyRef } from 'react';
import ErrorMessages from '../ErrorMessages';

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  options?: any[];
  ref2?: LegacyRef<HTMLSelectElement>;
}

export default function InputSelect({
  id,
  value,
  placeholder,
  required,
  options,
  disabled,
  onChange,
  ref2,
  ...rest
}: InputProps) {
  const selectColor = value === '' ? 'text-gray-400' : 'text-black';
  return (
    <>
      <select
        ref={ref2}
        {...rest}
        className={`${
          !disabled &&
          'focus:outline-none focus:border-white focus:ring hover:bg-gray-100 focus:ring-gray-300'
        } bg-gray-50 border border-gray-300 ${selectColor} text-sm rounded block w-full p-2
             'border-gray-300'
`}
      >
        <option
          defaultValue={''}
          disabled
          hidden
          key={''}
          value={''}
          className={'text-gray-400'}
        >
          {placeholder === undefined ? 'select the option' : placeholder}
        </option>
        {options?.map((x) => {
          return (
            <option
              key={x}
              id={x}
              className={
                'text-black group-optional:hover:bg-black focus:bg-black group-hover:green-100'
              }
              value={x}
            >
              {x}
            </option>
          );
        })}
      </select>
    </>
  );
}
