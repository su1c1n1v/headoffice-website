import { FC, InputHTMLAttributes } from 'react';

interface LabelProps extends InputHTMLAttributes<HTMLLabelElement> {
  id?: string;
  title?: string;
  required?: boolean;
}

const Label: FC<LabelProps> = ({ title, required, id, ...rest }) => {
  return (
    <label id={id} className="w-full block mb-2 text-gray-600">
      {title}
      {required && <span className="text-red-600 mx-1">*</span>}
    </label>
  );
};

export default Label;
