import React from 'react';
import { Link } from "react-router-dom";

function Featuredcollection() {
  return (
    <>
      <div className="w-full flex flex-col items-center px-4">

        <h1 className="text-center font-bold text-4xl mb-6 mt-24 font-Playfair">
          Featured <br /> collection
        </h1>

        {/* MOBILE (scroll) + DESKTOP (grid) */}
        <div
          className="
            w-full max-w-[1600px] mx-auto p-4

            /* Mobile: horizontal scroll */
            flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide

            /* Desktop: turn into grid */
            lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:snap-none lg:flex-none
          "
        >
          {/* Item 1 */}
          <Link
            to="/shop"
            className="min-w-[250px] snap-center lg:min-w-0"
          >
            <img
              src="/home-pic/FC-1.png"
              alt=""
              className="rounded-2xl w-full h-[420px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Item 2 */}
          <Link
            to="/shop"
            className="min-w-[250px] snap-center lg:min-w-0"
          >
            <img
              src="/home-pic/FC-2.png"
              alt=""
              className="rounded-2xl w-full h-[420px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Item 3 */}
          <Link
            to="/shop"
            className="min-w-[250px] snap-center lg:min-w-0"
          >
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
