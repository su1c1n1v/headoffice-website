import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';

import logo from '../assets/img/HeadOffice_FullColourWebPNG.png';
import Menu from '../assets/img/AdobeStock_328796674.jpeg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Toast, ToastProps } from 'flowbite-react';
import { FC, useState } from 'react';

export default function Main() {
  const { i18n } = useTranslation();

  return (
    <div className="w-full h-full bg-yellow-primary font-montserrat relative">
      {/* header */}
      <div className="flex">
        {/* logo */}
        <Link to="/">
          <img src={logo} className="w-64 m-auto" alt="logo" />
        </Link>

        <div className="h-30 w-full">
          {/* Social */}
          <div className="h-1/3 flex">
            {/* <Instagram className="h-full" />
            <Facebook className="h-full" />
            <Linkedin className="h-full" /> */}
          </div>

          {/* Menu */}
          <div className="h-1/3 flex justify-between">
            <div className="flex px-5">
              <Link
                className="p-4 hover:text-yellow-secondary duration-300"
                to="/"
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
            <div className="px-5 flex my-auto">
              <Link to="contatos">
                <Button vartiant={'submit'} title="Fale conosco"></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <Outlet />

      {/* Footer */}
      <div className="m-auto bg-white border-t p-4 border-gray-primary">
        <img src={logo} className="w-64 m-auto" alt="logo" />

        <p className="text-center w-1/2 m-auto pb-3">
          O HeadOffice é um centro de Beleza e Bem-estar para todos os géneros,
          que oferece mais de 100 serviços que vão de encontro às diferentes
          conveniências, com a vantagem que os poderá encontrar todos no mesmo
          espaço. Uma vinda ao HeadOffice, permite que trate do seu cabelo, das
          unhas, do rosto, do corpo e da sua mente.
          <span className="mx-1 text-yellow-secondary font-semibold">
            Esperamos por si.
          </span>
        </p>

        <div className="flex m-auto justify-center my-5 text-yellow-secondary">
          <Link
            className="p-4 font-normal hover:text-black duration-300"
            to="/"
          >
            Quem somos
          </Link>

          <Link
            className="p-4 font-normal hover:text-black duration-300"
            to="cabelos"
          >
            Cabelos
          </Link>
          <Link
            className="p-4 font-normal hover:text-black duration-300"
            to="estetica"
          >
            Estética
          </Link>
          <Link
            className="p-4 font-normal hover:text-black duration-300"
            to="medicina-estetica"
          >
            Medicina Estética
          </Link>
          <Link
            className="p-4 font-normal hover:text-black duration-300"
            to="contatos"
          >
            Contatos
          </Link>
        </div>

        <a href="tel:911064568" className="flex justify-center my-5">
          +351
          <span className="font-bold mx-1 hover:text-gray-primary duration-300">
            911 064 568
          </span>
        </a>

        <a
          href="https://goo.gl/maps/RdTWtrVkhMK4XH927"
          className="flex justify-center my-5 hover:text-yellow-secondary duration-300"
        >
          Lake Towers, R. Daciano Baptista Marques Ed.C 181, 1ºC, 4400-414 Vila
          Nova de Gaia
        </a>

        <div className="m-auto w-5 border-t-2 my-5 border-gray-secondary" />

        <p className="text-center mb-10">
          © 2023 | Headoffice. Todos os direitos reservados
        </p>
      </div>
    </div>
  );
}
