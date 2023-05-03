import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';

type MenuDropdownProps = {
  title: string;
  routes?: MenuRoutes[];
  variant?: string;
  className?: string;
  onClick?: () => void;
};

export type MenuRoutes = {
  route: string;
  name: string;
};

export default function MenuDropdown({
  title,
  routes,
  className,
  onClick,
}: MenuDropdownProps) {
  const { t } = useTranslation();
  const location = useLocation();

  const [dropdown, setDropdown] = useState(false);

  function selectPage(path: string) {
    console.log(location.pathname);
    return !location.pathname.search(path)
      ? 'text-yellow-secondary'
      : 'text-black';
  }
  function onClickFunction() {
    if (onClick) onClick();
    setDropdown(!dropdown);
  }

  return (
    <div className="relative w-24">
      <div className="fixed top-auto z-50">
        <Menu as="div" className="inline-block text-left w-[6rem]">
          <div>
            <Menu.Button
              className={`inline-flex w-full pt-4 justify-center rounded-md border-0 text-black bg-opacity-20 hover:text-yellow-secondary duration-300 ${selectPage(
                '/estetica'
              )}`}
            >
              {t(title)}
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
            <Menu.Items className="absolute mt-2 w-56 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div>
                <ul>
                  {routes &&
                    routes.map((x) => (
                      <Menu.Item>
                        <li>
                          <Link
                            onClick={onClickFunction}
                            className={`block px-4 py-2 hover:text-yellow-secondary duration-300 hover:bg-gray-100 ${selectPage(
                              '/' + x.route
                            )}`}
                            to={x.route}
                          >
                            {t(x.name)}
                          </Link>
                        </li>
                      </Menu.Item>
                    ))}
                </ul>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
