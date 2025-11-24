import React from "react";
import heroImage from "../../../public/home-pic/hero3.jpg";

function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-[770px] flex flex-col items-center justify-center text-center "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <h1 className="relative text-white text-[4.5rem] font-bold">
        Elevate Every Moment
      </h1>
      <p className="relative text-white text-2xl mb-6">
        Discover our curated collection of premium accessories
      </p>

    </div>
  );
}

export default Hero;
