import React from 'react';
import { Link } from "react-router-dom";

function Featuredcollection() {
  return (
    <>
      <div className="w-full flex flex-col items-center px-4">

        <h1 className="text-center font-bold text-4xl mb-6 mt-24 font-Playfair">
          Featured <br /> collection
        </h1>

        <div className="
          grid grid-cols-1 gap-6
          sm:grid-cols-2
          lg:grid-cols-3 lg:gap-8
          w-full max-w-[1600px]   /* <-- fits beautifully on 1920px screens */
          mx-auto
          p-4

          sm
        ">
          {/* Item 1 */}
          <Link to="/shop">
            <img
              src="/home-pic/FC-1.png"
              alt=""
              className="rounded-2xl w-full h-[420px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Item 2 */}
          <Link to="/shop">
            <img
              src="/home-pic/FC-2.png"
              alt=""
              className="rounded-2xl w-full h-[420px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Item 3 */}
          <Link to="/shop">
            <img
              src="/home-pic/FC-3.png"
              alt=""
              className="rounded-2xl w-full h-[420px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

        </div>
      </div>
    </>
  );
}

export default Featuredcollection;
