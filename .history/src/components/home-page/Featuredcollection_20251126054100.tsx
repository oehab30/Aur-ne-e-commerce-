import React from 'react';
import { Link } from "react-router-dom";

function Featuredcollection() {
  return (
    <>
      <div className="w-full flex flex-col items-center px-4">

        {/* Title */}
        <h1 className="text-center font-bold text-4xl mb-6 mt-24 font-Playfair">
          Featured <br /> collection
        </h1>

        {/* Collection Container */}
        <div className="flex gap-6 w-full max-w-6xl overflow-x-auto snap-x snap-mandatory scrollbar-hide
                        md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:p-4">

          {/* Item 1 */}
          <Link to="/shop" className="min-w-[250px] snap-center md:min-w-0">
            <img
              src="/home-pic/FC-1.png"
              alt=""
              className="rounded-2xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Item 2 */}
          <Link to="/shop" className="min-w-[250px] snap-center md:min-w-0">
            <img
              src="/home-pic/FC-2.png"
              alt=""
              className="rounded-2xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Item 3 */}
          <Link to="/shop" className="min-w-[250px] snap-center md:min-w-0">
            <img
              src="/home-pic/FC-3.png"
              alt=""
              className="rounded-2xl w-full  h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

        </div>
      </div>
    </>
  );
}

export default Featuredcollection;
