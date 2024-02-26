import { FC, ReactElement } from 'react';

const Hero: FC = (): ReactElement => {
  return (
    <div className="relative bg-white pb-20 pt-40 dark:bg-gray-900 lg:pt-44">
      <div className="relative m-auto px-6 xl:container md:px-12 lg:px-6">
        <h1 className="text-center text-4xl font-black text-blue-900 dark:text-white sm:mx-auto sm:w-10/12 sm:text-5xl md:w-10/12 md:text-5xl lg:w-auto lg:text-left xl:text-7xl">
          La mejor Comunidad para formar vinculos de <br className="hidden lg:block" />{' '}
          <span className="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
            Verdad
          </span>
          .
        </h1>
        <div className="lg:flex">
          <div className="relative mt-8 space-y-8 text-center sm:mx-auto sm:w-10/12 md:mt-16 md:w-2/3 lg:ml-0 lg:mr-auto lg:w-7/12 lg:text-left"></div>
          <div className="-right-10 hidden lg:col-span-2 lg:mt-0 lg:flex">
            <div className="relative w-full">
              <img src="src/assets/uas.png" className="relative w-full" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
