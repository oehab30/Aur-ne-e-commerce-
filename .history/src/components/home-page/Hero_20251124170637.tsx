import React from "react";
import heroImage from "../../../public/home-pic/hero3.jpg";

function Hero() {
  return (
    <div
      className="relative w-full h-[85vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
          Elevate Every Moment
        </h1>
        <p className="mt-4 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow-md">
          Discover our curated collection of premium accessories
        </p>
      </div>
    </div>
  );
}

export default Hero;
