import React from 'react';
import heroImage from "../../../public/home-pic/summer-collection.jpg";
import { motion } from "framer-motion";

function Summercollection() {
  return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}   // start hidden & moved down
        whileInView={{ opacity: 1, x: 0 }} // animate when in view
        viewport={{ once: true, amount: 09 }} // trigger when 20% visible
        transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center text-center mt-20 h-[300px]  bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="font-bold text-3xl md:text-5xl text-white mb-4">
          Summer Collection
        </h1>
        <p className="text-xl md:text-2xl text-white mb-6">
          20% Off All Items
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300">
          Shop Collection
        </button>
      </div>
    </motion.div>
  );
}

export default Summercollection;
