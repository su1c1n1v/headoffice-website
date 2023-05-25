import { Outlet } from 'react-router';

import logo from '../assets/img/HeadOffice_FullColourWebPNG.png';
import LogoBlack from '../assets/img/headoffice-logo-black.jpg';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as Hambuguer } from '../assets/icons/hambuguer.svg';
import { ReactComponent as Baloon } from '../assets/icons/baloon.svg';
import { useState } from 'react';
import Icons from '../components/Icons';
import MenuMobile from '../components/MenuMobile';
import { useTranslation } from 'react-i18next';
import MenuDropdown from '../components/MenuDropdown';
import MultiLanguage from '../components/MultiLanguage';

export default function Main() {
  const { t } = useTranslation();
  const [imageScrollClasses, setImageScrollClasses] = useState('md:w-60 w-52');

  window.onscroll = function () {
    scrollFunction();
  };

  const location = useLocation();

  function scrollFunction() {
    if (document.documentElement.scrollTop > 120) {
      setImageScrollClasses('md:w-40 w-36');
    } else {
      setImageScrollClasses('md:w-60 w-52');
    }
  }

  const [showMenu, setShowMenu] = useState<boolean | undefined>();

  function selectPage(path: string) {
    return !location.pathname.search(path)
      ? 'text-yellow-secondary'
      : 'text-black';
  }

  const shouldBlur = showMenu && 'blur-sm duration-500';

  return (
    <div className="relative bg-yellow-primary">
      {/* header */}
      <div id="navbar" className="sticky top-0 z-50 h-[12rem]">
        <div
          className={`w-full duration-500 bg-white border-gray-primary flex justify-between sticky top-0 z-40 overflow-hidden ${shouldBlur}`}
        >
          <div className="m-auto w-full mx-10 md:mx-auto md:w-11/12 xl:w-8/12 flex justify-between">
            <Link to="/">
              <img
                src={logo}
                className={`${imageScrollClasses} duration-500`}
                alt="logo"
              />
            </Link>

            <div
              className="md:hidden px-10 my-auto"
              onClick={() => setShowMenu(true)}
            >
              <Hambuguer className="mr-0 ml-auto w-9 text-gray-secondary cursor-pointer" />
            </div>

            {/* Menu */}
            <div
              className={`my-auto md:flex justify-between hidden duration-500 z-40`}
            >
              <Link
                className={`p-4 hover:text-yellow-secondary duration-300 ${selectPage(
                  '/quem-somos'
                )}`}
                to="quem-somos"
              >
                {t('Quem somos')}
              </Link>
              <Link
                className={`p-4 hover:text-yellow-secondary duration-300 ${selectPage(
                  '/cabelos'
                )}`}
                to="cabelos"
              >
                {t('Cabelos')}
              </Link>
              {/* <MenuComponent /> */}
              <MenuDropdown
                title="Estética"
                routes={[
                  {
                    name: 'Cuidados de Beleza',
                    route: 'estetica/cuidados-beleza',
                  },
                  { name: 'Estética Rosto', route: 'estetica/estetica-rosto' },
                  { name: 'Estética Corpo', route: 'estetica/estetica-corpo' },
                ]}
              />
              <Link
                className={`p-4 hover:text-yellow-secondary duration-300 ${selectPage(
                  '/medicina-estetica'
                )}`}
                to="medicina-estetica"
              >
                {t('Medicina Estética')}
              </Link>

              <div className="p-4">
                <MultiLanguage />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-10 right-10 z-50">
        <Link
          className="border hover:bg-gray-200 shadow-xl hover:fill-black fill-white text-white flex font-medium rounded-full bg-yellow-secondary px-14 py-4  hover:text-black duration-300"
          to="contatos"
        >
          <Baloon className="w-5 mr-4" />

          {t('Fale conosco')}
        </Link>
      </div>
      <div className="w-full bg-yellow-primary font-montserrat relative">
        <div className={`${shouldBlur}`}>
          {/* Content */}
          <Outlet />

          {/* Footer */}
          <div className="m-auto bg-white border-t p-4 border-gray-primary">
            {/* Logo */}
            <img src={LogoBlack} className="w-96 md:w-64 m-auto" alt="logo" />
            {/* Footer Description */}
            <p className="text-center px-10 md:p-0 md:w-1/2 m-auto pb-3">
              {t('description-footer')}
              <span className="mx-1 text-yellow-secondary font-semibold">
                {t('description2-footer')}
              </span>
            </p>
            {/* Menu */}
            <div className="flex m-auto justify-center text-yellow-secondary">
              <Link
                className="px-1 md:p-4 font-normal hover:text-black duration-300"
                to="quem-somos"
              >
                {t('Quem somos')}
              </Link>

              <div className="rounded-full bg-gray-primary w-2 h-2 flex my-auto"></div>

              <Link
                className="px-1 md:p-4 font-normal hover:text-black duration-300"
                to="cabelos"
              >
                {t('Cabelos')}
              </Link>

              <div className="rounded-full bg-gray-primary w-2 h-2 flex my-auto"></div>

              <Link
                className="px-1 md:p-4 font-normal hover:text-black duration-300"
                to="estetica/cuidados-beleza"
              >
                {t('Estética')}
              </Link>

              <div className="rounded-full bg-gray-primary w-2 h-2 flex my-auto"></div>

              <Link
                className="px-1 md:p-4 font-normal hover:text-black duration-300"
                to="medicina-estetica"
              >
                {t('Medicina Estética')}
              </Link>
            </div>
            {/* Social Media */}
            <Icons classname="w-4/6 md:w-3/5 lg:w-1/5 m-auto flex justify-around" />
            {/* Phone Number */}
            <a href="tel:911064568" className="flex justify-center">
              +351
              <span className="font-bold mx-1 hover:text-gray-primary duration-300">
                911 064 568
              </span>
            </a>

            <p className="text-center w-30 mt-5">{t('horario')}</p>
            <p className="text-center w-30">{t('horario2')}</p>
            <div className="m-auto w-5 border-t-2 my-5 border-gray-secondary" />

            {/* Location */}
            <div className="md:w-2/6 md:p-5 p-10 m-auto">
              <iframe
                title="Google maps"
                className="w-full h-52 shadow-2xl"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12018.570738231974!2d-8.6397294!3d41.1423256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246515c826f109%3A0x3fe9bcae29ce6bc0!2sHeadOffice!5e0!3m2!1sen!2spt!4v1681665525413!5m2!1sen!2spt"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="m-auto w-5 border-t-2 my-5 border-gray-secondary" />
            <p className="text-center mb-5">© 2023 | {t('rights')}</p>
          </div>
        </div>

        <MenuMobile setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </div>
  );
}
