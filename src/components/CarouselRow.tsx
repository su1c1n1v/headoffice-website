import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type ComponentProps = {
  title: string;
  description: string;
  button: string;
  url?: string;
  img: string;
  subtitle?: string;
  color?: string;
  reverse?: boolean;
};

export default function CarouselRow({
  title,
  description,
  button,
  img,
  color,
  url,
  subtitle,
  reverse,
}: ComponentProps) {
  const { t } = useTranslation();
  return (
    <div
      className={`bg-yellow-secondary w-full h-full ${img} bg-center bg-cover flex ${
        reverse && 'justify-end'
      }`}
    >
      <div className="md:w-1/2 w-full px-5 md:my-20 xl:my-36 flex md:mx-20 mx-5 border-y border-yellow-secondary">
        <div className="m-auto">
          {subtitle && (
            <p className="md:text-2xl text-xl font-semibold my-3 text-gray-500">
              {t(subtitle)}
            </p>
          )}
          <h1 className="md:text-6xl text-4xl font-bold my-4">{t(title)}</h1>

          <p
            className={`font-semibold text-md my-3 ${
              color ? color : 'text-gray-500'
            }`}
          >
            {t(description)}
          </p>

          {button && url && (
            <Link to={url} className="flex">
              <button className="bg-yellow-secondary shadow-xl text-white px-5 py-2 rounded-md my-3">
                {t(button)}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
