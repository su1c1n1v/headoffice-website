import { InputHTMLAttributes, LegacyRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  options?: any[];
  ref2?: LegacyRef<HTMLSelectElement>;
}

export default function InputSelect({
  placeholder,
  required,
  options,
  disabled,
  onChange,
  ref2,
  ...rest
}: InputProps) {
  const [value, setValue] = useState<string>();

  const selectColor = value ? 'text-gray-500' : 'text-black';

  const { t } = useTranslation();

  return (
    <>
      <select
        ref={ref2}
        onChange={(e) => {
          onChange && onChange(e);
          setValue(e.target.value);
        }}
        {...rest}
        className={`${!disabled &&
          'focus:outline-none focus:border-white focus:ring hover:bg-gray-100 focus:ring-gray-300'
          } bg-gray-50 border border-gray-300 ${selectColor} text-sm rounded block w-full p-2
             'border-gray-300'`}
      >
        <option
          defaultValue={''}
          disabled
          hidden
          key={''}
          value={''}
          className={'text-gray-400'}
        >
          {placeholder === undefined ? t('select the option').toString() : t(placeholder).toString()}
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
              {t(x)}
            </option>
          );
        })}
      </select>
    </>
  );
}
