import React from 'react'
import { motion } from "framer-motion";

function BestSellers() {
    const products = [
        {
id:1,
image: "/home-pic/HO-1.png",
descrip:"Classic Gold Watch",
buttonColor: "#9333EA",
    },
    {
id:2,
image: "/home-pic/HO-1.png",
descrip:"Classic Gold Watch",
buttonColor: "#9333EA",
    },
    {
        id:3,
image: "/home-pic/HO-1.png",
descrip:"Classic Gold Watch",
buttonColor: "#9333EA",
    },

]
  return (
    <>

        {/* Title */}
        <h1 className="text-center font-bold text-4xl mb-6 mt-24 font-Playfair">
          Best <br /> Sellers
        </h1>

        
 <motion.div className="w-full flex flex-col items-center px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>


    <img src="" alt="" />
    <h1></h1>
    <h2></h2>
    <button></button>

          </motion.div>
    </>
  )
}

export default BestSellers