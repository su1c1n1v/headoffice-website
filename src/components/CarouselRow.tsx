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
      <div className="w-1/2 px-5 md:my-20 xl:my-36 flex mx-20 border-y border-yellow-secondary">
        <div className="m-auto">
          {subtitle && (
            <p className="text-2xl font-semibold my-3 text-gray-500">
              {t(subtitle)}
            </p>
          )}
          <h1 className="text-6xl font-bold my-4">{t(title)}</h1>

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
