import { FC, InputHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

interface LabelProps extends InputHTMLAttributes<HTMLLabelElement> {
  id?: string;
  title?: any;
  required?: boolean;
}

const Label: FC<LabelProps> = ({ title, required, id, ...rest }) => {

  const { t } = useTranslation();
  return (
    <label id={id} className="w-full block mb-2 text-gray-600">
      {t(title)}
      {required && <span className="text-red-600 mx-1">*</span>}
    </label>
  );
};

export default Label;
