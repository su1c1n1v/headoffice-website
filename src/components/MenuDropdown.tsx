import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

type MenuDropdownProps = {
  title: string;
  routes?: MenuRoutes[];
  variant?: string;
  className?: string;
};

export type MenuRoutes = {
  route: string;
  name: string;
};

export default function MenuDropdown({
  title,
  routes,
  className,
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

  return (
    <div>
      <button
        className={`${className} ${selectPage('/estetica')}`}
        onClick={() => setDropdown(!dropdown)}
      >
        {t(title)}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {dropdown && (
        <div className="z-50 fixed bg-white divide-y divide-gray-100 rounded-lg shadow w-44 md:mx-0 mx-28">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {routes &&
              routes.map((x) => (
                <li>
                  <Link
                    onClick={() => setDropdown(!dropdown)}
                    className={`block px-4 py-2 font-medium hover:text-yellow-secondary duration-300 hover:bg-gray-100 ${selectPage(
                      '/' + x.route
                    )}`}
                    to={x.route}
                  >
                    {t(x.name)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
