import { Link, useLocation } from 'react-router-dom';
import Icons from './Icons';
import LogoBlack from '../assets/img/headoffice-logo-black.jpg';
import { ReactComponent as X } from '../assets/icons/x.svg';
import { t } from 'i18next';
import MenuDropdown from './MenuDropdown';
import MultiLanguage from './MultiLanguage';

interface MenuMobileProps {
  classname?: string;
  showMenu?: boolean;
  setShowMenu: (value?: boolean) => void;
}

export default function MenuMobile({
  classname,
  showMenu,
  setShowMenu,
}: MenuMobileProps) {
  const location = useLocation();

  function selectPage(path: string) {
    return !location.pathname.search(path)
      ? 'text-yellow-secondary'
      : 'text-black';
  }

  function close() {
    setShowMenu(false);
  }
  return (
    <div
      className={`fixed border-2 w-[75%] blur-0 md:hidden h-full top-0 right-[-75%] bg-white shadow-xl z-[1000] ${classname} ${
        showMenu === undefined
          ? ''
          : showMenu === true
          ? 'move-left'
          : 'move-right'
      }`}
    >
      <div className="mt-5 mx-5 flex">
        <MultiLanguage />

        <X
          onClick={close}
          className="ml-auto w-8 h-8 text-yellow-secondary hover:text-black"
        />
      </div>

      <Link to="/">
        <img src={LogoBlack} className="w-80 mx-auto" alt="logo" />
      </Link>
      {/* Logo */}

      <div className="w-[80%] m-auto border-yellow-secondary">
        {/* Menu */}
        <div className="text-center my-7 text-2xl">
          <Link
            onClick={close}
            className={`hover:text-yellow-secondary duration-300 ${selectPage(
              '/quem-somos'
            )}`}
            to="quem-somos"
          >
            {t('Quem somos')}
          </Link>
        </div>

        <div className="text-center my-5 text-2xl">
          <Link
            onClick={close}
            className={`hover:text-yellow-secondary duration-300  ${selectPage(
              '/cabelos'
            )}`}
            to="cabelos"
          >
            {t('Cabelos')}
          </Link>
        </div>

        <div className="h-14 flex justify-center text-2xl">
          <MenuDropdown
            title="Estética"
            onClick={close}
            className="text-black p-4 text-center inline-flex items-center hover:text-yellow-secondary duration-300"
            routes={[
              {
                name: 'Cuidados de Beleza',
                route: 'estetica/cuidados-beleza',
              },
              { name: 'Estética Rosto', route: 'estetica/estetica-rosto' },
              { name: 'Estética Corpo', route: 'estetica/estetica-corpo' },
            ]}
          />
        </div>

        <div className="text-center my-5 text-2xl">
          <Link
            onClick={close}
            className={`hover:text-yellow-secondary duration-300  ${selectPage(
              '/medicina-estetica'
            )}`}
            to="medicina-estetica"
          >
            {t('Medicina Estética')}
          </Link>
        </div>
      </div>

      <Icons classname="flex mx-20 justify-around my-2" />
    </div>
  );
}
