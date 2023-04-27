import { t } from 'i18next';
import { useEffect, useState } from 'react';

interface ComponentProps {
  classname?: string;
  image?: string;
  title?: any;
  subTitle?: any;
  description?: any;
  benefits?: string[];
  revert?: boolean;
}

export default function ContainerEstetica({
  classname,
  image,
  title,
  subTitle,
  description,
  revert,
  benefits,
}: ComponentProps) {
  const [textTitle, setTextTitle] = useState<string>('');
  const [textDescription, setTextDescription] = useState<string>('');
  const [textSubTitle, setTextSubTitle] = useState<string>('');
  const [textBenefts, setTextBenefits] = useState<string[]>([]);

  useEffect(() => {
    setTextTitle(t(title).toString());
    setTextSubTitle(t(subTitle).toString());
    setTextDescription(t(description).toString());
    if (benefits) setTextBenefits(benefits?.map((x) => t(x).toString()));
  });

  return (
    <>
      {/* Container 1 */}
      <div
        className={`w-full px-10 md:px-0 md:mx-auto h-auto md:h-screen md:flex ${classname} ${
          revert ? 'flex-row-reverse' : ''
        } mb-72 mt-10`}
      >
        {/* Column 1 */}
        <div className="relative md:flex items-center justify-center overflow-hidden border-transparent w-full h-80 md:h-auto md:w-1/2">
          <div
            className={`absolute hover:scale-110 w-full h-full ${image} transition-all duration-500 ease-in-out transform bg-center bg-cover`}
          />
        </div>

        {/* Column 2 */}
        <div
          className={`md:w-1/2 ${
            revert ? 'md:mr-20' : 'md:ml-20'
          } text-yellow-secondary my-auto`}
        >
          <div className={`my-auto w-full`}>
            <p className="uppercase font-semibold text-3xl my-4">{textTitle}</p>
            <p className="uppercase font-serif text-xl mb-8 mt-4 font-medium">
              {textSubTitle}
            </p>
            <p className="text-black text-lg text-justify">{textDescription}</p>

            {benefits && (
              <div className="mt-10">
                <p className="text-lg my-2">{t('Os principais benefícios')}</p>
                {textBenefts.map((x) => (
                  <li className="text-sm text-gray-primary">{x}</li>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
