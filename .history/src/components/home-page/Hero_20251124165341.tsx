import React from "react";
import heroImage from "../../../public/home-pic/.jpg";

function Hero() {
  return (
   <div className="relative bg-[url('/home-pic/hero2.jpg')] bg-cover bg-center h-[850px] flex flex-col items-center justify-center text-center">
  <div className="absolute inset-0 bg-black/10"></div>
  <h1 className="relative text-white text-[4.5rem] font-bold drop-shadow-lg">
    Elevate Every Moment
  </h1>
  <p className="relative text-white text-2xl mb-6 drop-shadow-md">
    Discover our curated collection of premium accessories
  </p>
</div>

  );
}

export default Hero;
