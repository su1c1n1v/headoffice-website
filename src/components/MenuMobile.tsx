import { Link } from 'react-router-dom';
import Icons from './Icons';
import LogoBlack from '../assets/img/headoffice-logo-black.jpg';
import { ReactComponent as X } from '../assets/icons/x.svg';
import Button from './Button';

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
      <div className="mt-5 mx-5" onClick={() => setShowMenu(false)}>
        <X className="ml-auto w-8 h-8 text-yellow-secondary hover:text-black" />
      </div>

      <Link className="" to="/">
        <img src={LogoBlack} className="w-72 m-auto" alt="logo" />
      </Link>
      {/* Logo */}

      <div className="w-96 m-auto border-y-2 border-yellow-secondary">
        {/* Menu */}
        <div className="text-center my-8 text-2xl">
          <Link
            className="hover:text-yellow-secondary duration-300"
            to="quem-somos"
          >
            Quem somos
          </Link>
        </div>

        <div className="text-center my-8 text-2xl">
          <Link
            className="hover:text-yellow-secondary duration-300"
            to="cabelos"
          >
            Cabelos
          </Link>
        </div>

        <div className="text-center my-8 text-2xl">
          <Link
            className="hover:text-yellow-secondary duration-300"
            to="estetica"
          >
            Estética
          </Link>
        </div>

        <div className="text-center my-8 text-2xl">
          <Link
            className="hover:text-yellow-secondary duration-300"
            to="medicina-estetica"
          >
            Medicina Estética
          </Link>
        </div>
      </div>

      <Icons classname="flex mx-20 justify-around my-5" />

      <div className="text-center my-8">
        <Link to="contatos">
          <Button vartiant={'submit'} title="Fale conosco"></Button>
        </Link>
      </div>
    </div>
  );
}
