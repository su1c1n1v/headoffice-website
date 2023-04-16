import { InputHTMLAttributes, LegacyRef } from 'react';

interface InputTextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  ref2?: LegacyRef<HTMLTextAreaElement>;
}

export default function InputTextArea({
  rows,
  ref2,
  ...rest
}: InputTextAreaProps) {
  const classes = `focus:outline-none resize-none block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 border-gray-300 focus:ring hover:bg-gray-100 focus:ring-gray-300`;

  return (
    <>
      <textarea rows={rows} className={classes} ref={ref2} {...rest} />
    </>
  );
}
