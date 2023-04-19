import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';

import logo from '../assets/img/HeadOffice_FullColourWebPNG.png';
import Menu from '../assets/img/AdobeStock_328796674.jpeg';
import LogoBlack from '../assets/img/headoffice-logo-black.jpg';
import LogoGold from '../assets/img/headoffice-logo-gold.png';
import Image1 from '../assets/img/image1.jpg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

import { ReactComponent as Hambuguer } from '../assets/icons/hambuguer.svg';
import { useState } from 'react';
import Icons from '../components/Icons';
import MenuMobile from '../components/MenuMobile';

export default function Main() {
  const { i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean | undefined>();

  return (
    <div className="w-full h-full bg-yellow-primary font-montserrat relative">
      <div
        className={`${
          showMenu ? 'blur-sm duration-500' : 'blur-none duration-500'
        }`}
      >
        {/* header */}
        <div className="flex justify-between">
          {/* logo */}
          <Link to="/">
            <img src={logo} className="md:w-64 w-52 m-auto" alt="logo" />
          </Link>

          {/* Hamburger */}
          <div
            className="md:hidden px-10 my-auto"
            onClick={() => setShowMenu(true)}
          >
            <Hambuguer className="mr-0 ml-auto w-9 text-gray-secondary cursor-pointer" />
          </div>

          {/* Menu */}
          <div className="h-30 mt-16 w-full md:flex justify-between hidden">
            <div className="flex px-5">
              <Link
                className="p-4 hover:text-yellow-secondary duration-300"
                to="quem-somos"
              >
                Quem somos
              </Link>
              <Link
                className="p-4 hover:text-yellow-secondary duration-300"
                to="cabelos"
              >
                Cabelos
              </Link>
              <Link
                className="p-4 hover:text-yellow-secondary duration-300"
                to="estetica"
              >
                Estética
              </Link>
              <Link
                className="p-4 hover:text-yellow-secondary duration-300"
                to="medicina-estetica"
              >
                Medicina Estética
              </Link>
            </div>
            <Link to="contatos" className="px-5 flex">
              <Button vartiant={'submit'} title="Fale conosco"></Button>
            </Link>
          </div>
        </div>

        {/* Content */}
        <Outlet />

        {/* Footer */}
        <div className="m-auto bg-white border-t p-4 border-gray-primary">
          {/* Logo */}
          <img src={LogoBlack} className="w-96 md:w-64 m-auto" alt="logo" />
          {/* Footer Description */}
          <p className="text-center px-10 md:p-0 md:w-1/2 m-auto pb-3">
            O HeadOffice é um centro de Beleza e Bem-estar para todos os
            géneros, que oferece mais de 100 serviços que vão de encontro às
            diferentes conveniências, com a vantagem que os poderá encontrar
            todos no mesmo espaço. Uma vinda ao HeadOffice, permite que trate do
            seu cabelo, das unhas, do rosto, do corpo e da sua mente.
            <span className="mx-1 text-yellow-secondary font-semibold">
              Esperamos por si.
            </span>
          </p>
          {/* Menu */}
          <div className="flex m-auto justify-center text-yellow-secondary">
            <Link
              className="px-1 md:p-4 font-normal hover:text-black duration-300"
              to="quem-somos"
            >
              Quem somos
            </Link>

            <div className="rounded-full bg-gray-primary w-2 h-2 flex my-auto"></div>

            <Link
              className="px-1 md:p-4 font-normal hover:text-black duration-300"
              to="cabelos"
            >
              Cabelos
            </Link>

            <div className="rounded-full bg-gray-primary w-2 h-2 flex my-auto"></div>

            <Link
              className="px-1 md:p-4 font-normal hover:text-black duration-300"
              to="estetica"
            >
              Estética
            </Link>

            <div className="rounded-full bg-gray-primary w-2 h-2 flex my-auto"></div>

            <Link
              className="px-1 md:p-4 font-normal hover:text-black duration-300"
              to="medicina-estetica"
            >
              Medicina Estética
            </Link>

            <div className="rounded-full bg-gray-primary w-2 h-2 flex my-auto"></div>

            <Link
              className="px-1 md:p-4 font-normal hover:text-black duration-300"
              to="contatos"
            >
              Contatos
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
          {/* Location */}
          <div className="md:w-2/6 md:p-5 p-10 m-auto">
            <iframe
              className="w-full h-52 shadow-2xl"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12018.570738231974!2d-8.6397294!3d41.1423256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246515c826f109%3A0x3fe9bcae29ce6bc0!2sHeadOffice!5e0!3m2!1sen!2spt!4v1681665525413!5m2!1sen!2spt"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="m-auto w-5 border-t-2 my-5 border-gray-secondary" />
          <p className="text-center mb-5">
            © 2023 | Headoffice. Todos os direitos reservados
          </p>
        </div>
      </div>

      <MenuMobile setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
}
