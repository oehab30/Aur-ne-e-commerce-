import React from 'react';
import { motion } from "framer-motion";

function BestSellers() {
  const products = [
    {
      id: 1,
      image: "/home-pic/HO-1.png",
      descrip: "Classic Gold Watch",
      price: "$2,450",
      buttonColor: "#9333EA",
    },
    {
      id: 2,
      image: "/home-pic/HO-1.png",
      descrip: "Classic Gold Watch",
            price: "$2,z50",
      buttonColor: "#9333EA",
    },
    {
      id: 3,
      image: "/home-pic/HO-1.png",
            price: "$2,000",
      descrip: "Classic Gold Watch",
      buttonColor: "#9333EA",
    },
  ];

  return (
    <>
      {/* Title */}
      <h1 className="text-center font-bold text-4xl mb-6 mt-24 font-Playfair">
        Best <br /> Sellers
      </h1>

      {/* Product List */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="w-[250px] bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.descrip}
              className="w-full h-64 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
            />

            {/* Description */}
            <h2 className="text-lg font-semibold text-center mb-2">{product.descrip}</h2>

            {/* Optional Subtitle or Price */}
            <p className="text-gray-500 text-sm mb-4">Elegant & Timeless</p>

            {/* Button */}
            <button
              style={{ backgroundColor: product.buttonColor }}
              className="text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              Shop Now
            </button>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default BestSellers;
