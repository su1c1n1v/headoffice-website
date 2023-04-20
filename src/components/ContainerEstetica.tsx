interface ComponentProps {
  classname?: string;
  image?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  revert?: boolean;
}

export default function ContainerEstetica({
  classname,
  image,
  title,
  subTitle,
  description,
  revert,
}: ComponentProps) {
  return (
    <>
      {/* Container 1 */}
      <div
        className={`md:h-56 md:flex mx-10 ${classname} ${
          revert ? 'flex-row-reverse' : ''
        } my-20 md:mx-auto`}
      >
        {/* Column 1 */}
        <div className="relative md:flex items-center justify-center overflow-hidden shadow-2xl w-full h-80 md:h-auto md:w-1/2">
          <div
            className={`absolute hover:scale-110 w-full h-full ${image} transition-all duration-500 ease-in-out transform bg-center bg-cover`}
          />
        </div>

        {/* Column 2 */}
        <div
          className={`md:w-1/2 ${
            revert ? 'md:mr-20' : 'md:ml-20'
          } text-yellow-secondary`}
        >
          <div className={`w-full`}>
            <p className="uppercase text-sm my-4">{title}</p>
            <p className="uppercase font-serif my-4 font-medium">{subTitle}</p>
            <p className="text-black">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
