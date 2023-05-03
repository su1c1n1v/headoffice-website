import { useTranslation } from 'react-i18next';
import Button from './Button';
import { Fragment, useState } from 'react';
import pt from '../assets/icons/portugal-flag-round-circle-icon.svg';
import us from '../assets/icons/uk-flag-round-circle-icon.svg';
import { Menu, Transition } from '@headlessui/react';

export default function MultiLanguage() {
  const { i18n, t } = useTranslation();

  const [dropdown, setDropdown] = useState(false);
  function changeLanguage(language: string) {
    i18n.changeLanguage(language);
    setDropdown(false);
  }
  return (
    <>
      <div className="relative w-24">
        <div className="fixed top-auto z-50">
          <Menu as="div" className="inline-block text-left w-[6rem]">
            <div>
              <Menu.Button
                className={`inline-flex w-full border py-1 justify-center m-auto rounded-full text-black bg-opacity-20 hover:text-yellow-secondary duration-300`}
              >
                <div className="flex justify-center">
                  <img
                    src={i18n.language == 'en-US' ? us : pt}
                    className="w-6"
                    alt="Portugal flag"
                  />
                  <p className="px-3 text-sm">
                    {i18n.language === 'en-US' ? 'EN' : 'PT'}
                  </p>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="w-56 mt-2 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div>
                  <ul className="cursor-pointer text-sm text-gray-700 dark:text-gray-200">
                    <Menu.Item>
                      <li
                        onClick={() => changeLanguage('pt-PT')}
                        className="block px-4 py-2 hover:text-yellow-secondary duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div className="flex">
                          <img src={pt} className="w-7" alt="Portugal flag" />
                          <p className="px-4 font-medium">{'PT'}</p>
                        </div>
                      </li>
                    </Menu.Item>
                    <Menu.Item>
                      <li
                        onClick={() => changeLanguage('en-US')}
                        className="block px-4 py-2 hover:text-yellow-secondary duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div className="flex">
                          <img src={us} className="w-7" alt="Portugal flag" />
                          <p className="px-5 font-medium">{'EN'}</p>
                        </div>
                      </li>
                    </Menu.Item>
                  </ul>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/* <Button vartiant={'search'} onClick={() => setDropdown(!dropdown)}>
        <div className="flex justify-center">
          <img
            src={i18n.language == 'en-US' ? us : pt}
            className="w-6"
            alt="Portugal flag"
          />
          <p className="px-3 text-sm">
            {i18n.language === 'en-US' ? 'EN' : 'PT'}
          </p>
        </div>
      </Button>
      {dropdown && (
        <div className="z-50 fixed bg-white divide-y divide-gray-100 rounded-lg shadow w-36 md:mx-0 mx-20">
          <ul className="cursor-pointer text-sm text-gray-700 dark:text-gray-200">
            <li
              onClick={() => changeLanguage('pt-PT')}
              className="block px-4 py-2 hover:text-yellow-secondary duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="flex">
                <img src={pt} className="w-7" alt="Portugal flag" />
                <p className="px-4 font-medium">{'PT'}</p>
              </div>
            </li>
            <li
              onClick={() => changeLanguage('en-US')}
              className="block px-4 py-2 hover:text-yellow-secondary duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="flex">
                <img src={us} className="w-7" alt="Portugal flag" />
                <p className="px-4 font-medium">{'EN'}</p>
              </div>
            </li>
          </ul>
        </div>
      )} */}
    </>
  );
}
