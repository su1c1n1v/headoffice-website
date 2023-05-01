import { useTranslation } from 'react-i18next';
import Button from './Button';
import { useState } from 'react';
import pt from '../assets/icons/portugal.png';
import us from '../assets/icons/us.png';

export default function MultiLanguage() {
  const { i18n, t } = useTranslation();

  const [dropdown, setDropdown] = useState(false);
  function changeLanguage(language: string) {
    i18n.changeLanguage(language);
    setDropdown(false);
  }
  return (
    <>
      <Button vartiant={'search'} onClick={() => setDropdown(!dropdown)}>
        <div className="flex justify-center">
          <img
            src={i18n.language == 'en-US' ? us : pt}
            className="w-6"
            alt="Portugal flag"
          />
          <p className="px-2">{i18n.language}</p>
        </div>
      </Button>
      {dropdown && (
        <div className="z-50 fixed bg-white divide-y divide-gray-100 rounded-lg shadow w-44 md:mx-0 mx-20">
          <ul className="cursor-pointer text-sm text-gray-700 dark:text-gray-200">
            <li
              onClick={() => changeLanguage('pt-PT')}
              className="block px-4 py-2 hover:text-yellow-secondary duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="flex">
                <img src={pt} className="w-7" alt="Portugal flag" />
                <p className="px-4 font-medium">{'pt-PT'}</p>
              </div>
            </li>
            <li
              onClick={() => changeLanguage('en-US')}
              className="block px-4 py-2 hover:text-yellow-secondary duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="flex">
                <img src={us} className="w-7" alt="Portugal flag" />
                <p className="px-4 font-medium">{'en-US'}</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
