import React from "react";

const Hero = ({ hero: { title, subtitle, text, btn1, btn2, img } }) => {
  return (
    <>
      <div className="flex bg-gradient-to-b from-emerald-200 to-white w-auto h-auto">
        <div className="travigo-container grid items-start justify-items-center">
          <div className="grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12">
            <h2 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg">
              {title}
            </h2>
            <h2 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg">
              {subtitle}
            </h2>
            <p className=" text-base py-5 sm:text-sm text-center">{text}</p>
            <div className="flex items-center justify-center gap-11 sm:gap-3 sm:flex-col">
              <button className="button-emrald">{btn1}</button>
              <button className="button-light">{btn2}</button>
            </div>
          </div>
          <div className="flex items-center justify-center mb-11">
            <img
              src={img}
              alt="dassbord img"
              className="h-[85vh] object-fill w-auto lg:h-[75vh] md:h-[55vh] sm:h-[35vh] sm:object-contain drop-shaddow-emrald"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
