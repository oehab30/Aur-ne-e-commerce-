import React from 'react';
import { motion } from "framer-motion";

function BestSellers() {
  const products = [
    {
      id: 1,
      image: "/home-pic/BS-1.png",
      descrip: "Classic Gold Watch",
      price: "$2,450",
      buttonColor: "#9333EA",
    },
    {
      id: 2,
      image: "/home-pic/BS-2.png",
      descrip: "Classic Gold Watch",
      price: "$3,450",
      buttonColor: "#9333EA",
    },
    {
      id: 3,
      image: "/home-pic/BS-3.png",
      price: "$2,000",
      descrip: "Classic Gold Watch",
      buttonColor: "#9333EA",
    },
    {
      id: 4,
      image: "/home-pic/BS-4.png",
      price: "$2,000",
      descrip: "Classic Gold Watch",
      buttonColor: "#9333EA",
    },
  ];

  return (
    <>
      {/* Title */}
      <h1 className="text-center font-bold text-4xl mb-12 mt-24 font-Playfair">
        Best <br /> Sellers
      </h1>

      {/* Product List */}
      <div className="flex flex-wrap justify-center gap-8 px-4 ">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="w-[350px] bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.descrip}
              className="w-full h-64 object-cover rounded-2xl mb-4 hover:scale-105 transition-transform duration-300"
            />

            {/* Description */}
            <h2 className="text-lg font-bold text-center mb-2">{product.descrip}</h2>

            {/* Price */}
            <p className="text-purple-600 font-semibold text-lg mb-4">{product.price}</p>

            {/* Button */}
            <button
              style={{ backgroundColor: product.buttonColor }}
              className="text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-200 font-medium"
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
