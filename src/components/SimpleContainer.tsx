import { Link } from 'react-router-dom';

interface ComponentProps {
  classname?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  revert?: boolean;
  url: string;
}

export default function SimpleContainer({
  classname,
  title,
  subTitle,
  description,
  revert,
  url,
}: ComponentProps) {
  return (
    <>
      {/* Container 1 */}
      <div
        className={`md:w-9/12 xl:w-8/12 md:h-80 md:flex mx-10 ${
          revert ? 'flex-row-reverse' : ''
        } md:mx-auto my-20 md:my-40`}
      >
        {/* Column 1 */}
        <div className="relative md:flex items-center justify-center overflow-hidden shadow-2xl w-full h-80 md:h-auto md:w-1/2">
          <div
            className={`absolute hover:scale-110 w-full h-full ${classname} transition-all duration-500 ease-in-out transform bg-center bg-cover`}
          />
        </div>

        {/* Column 2 */}
        <div
          className={`w-full md:w-1/2 ${
            revert ? 'md:mr-20' : 'md:ml-20'
          } text-yellow-secondary`}
        >
          <div className={`w-full`}>
            <p className="uppercase my-5 text-lg">{title}</p>
            <p className="uppercase text-3xl my-5 font-serif font-medium">
              {subTitle}
            </p>
            <p className="my-5 text-black">{description}</p>
            <div className="my-5">
              {/* <Button vartiant={'black'} title="Ler mais" /> */}
              <Link
                className="relative shadow-2xl inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-yellow-secondary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                to={url}
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-secondary group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Saber mais
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
