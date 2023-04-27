import { Link } from 'react-router-dom';
import Icons from './Icons';
import LogoBlack from '../assets/img/headoffice-logo-black.jpg';
import { ReactComponent as X } from '../assets/icons/x.svg';
import Button from './Button';
import { t } from 'i18next';
import { useContext } from 'react';
import LangContext from './LangContext';

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
  const Lang = useContext(LangContext);

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
        <Button
          vartiant={'search'}
          onClick={() =>
            Lang.setContext(Lang.context === 'en-US' ? 'pt-PT' : 'en-US')
          }
          title={Lang.context + ''}
        />
        <X
          onClick={() => setShowMenu(false)}
          className="ml-auto w-8 h-8 text-yellow-secondary hover:text-black"
        />
      </div>

      <Link to="/">
        <img src={LogoBlack} className="w-72 mx-auto" alt="logo" />
      </Link>
      {/* Logo */}

      <div className="w-[80%] m-auto border-y-2 border-yellow-secondary">
        {/* Menu */}
        <div className="text-center my-2 text-2xl">
          <Link
            className="hover:text-yellow-secondary duration-300"
            to="quem-somos"
          >
            {t('Quem somos')}
          </Link>
        </div>

        <div className="text-center my-2 text-2xl">
          <Link
            className="hover:text-yellow-secondary duration-300"
            to="cabelos"
          >
            {t('Cabelos')}
          </Link>
        </div>

        <div className="text-center my-2 text-2xl">
          <Link
            className="hover:text-yellow-secondary duration-300"
            to="estetica"
          >
            {t('Estética')}
          </Link>
        </div>

        <div className="text-center my-2 text-2xl">
          <Link
            className="hover:text-yellow-secondary duration-300"
            to="medicina-estetica"
          >
            {t('Medicina Estética')}
          </Link>
        </div>
      </div>

      <Icons classname="flex mx-20 justify-around my-2" />

      <div className="text-center my-8">
        <Link to="contatos">
          <Button
            vartiant={'submit'}
            title={t('Fale conosco').toString()}
          ></Button>
        </Link>
      </div>
    </div>
  );
}
