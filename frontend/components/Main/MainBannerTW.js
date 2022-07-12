import React from "react";
import NextImage from "../image";

const MainBannerTW = ({ heroData }) => {
  return (
    <div className="relative overflow-hidden main-banner">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5">
        <NextImage className="h-56 object-cover sm:h-72 md:h-96" image={heroData.attributes.hero.image} />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:py-64">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Data to enrich your</span> <span className="block text-indigo-600 xl:inline">online business</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      

      <div className="shape20">
        <img src="/images/shape/shape19.png" alt="image" />
      </div>
      <div className="shape21">
        <img src="/images/shape/shape20.png" alt="image" />
      </div>
      <div className="shape19">
        <img src="/images/shape/shape18.png" alt="image" />
      </div>
      <div className="shape22">
        <img src="/images/shape/shape21.png" alt="image" />
      </div>
      <div className="shape23">
        <img src="/images/shape/shape22.svg" alt="image" />
      </div>
      <div className="shape24">
        <img src="/images/shape/shape23.png" alt="image" />
      </div>
      <div className="shape26">
        <img src="/images/shape/shape25.png" alt="image" />
      </div>
    </div>
  );
};

export default MainBannerTW;
