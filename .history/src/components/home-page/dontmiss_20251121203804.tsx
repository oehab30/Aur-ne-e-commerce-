import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaRegClock } from "react-icons/fa";
import { motion } from "framer-motion";

function DontMiss() {
  const [timeLeft, setTimeLeft] = useState<string>("");

  // Countdown Timer
  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft("Expired");
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mx-4 md:mx-24 bg-gradient-to-r from-black to-[#8F1C33] text-white px-6 py-10 rounded-2xl shadow-xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold mb-4"
        >
          Don't Miss Out!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-6 text-lg md:text-xl opacity-90"
        >
          Limited time offer ends soon. Use code{" "}
          <span className="font-bold text-[#D4AF37]">ELEGANCE20</span> for 20%
          off your entire order!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col-reverse md:flex-row gap-5 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] hover:bg-[#b7922f] duration-300 text-black py-4 px-6 rounded-xl flex items-center gap-3 font-semibold shadow-lg cursor-pointer"
            onClick={() => console.log("Button clicked")}
          >
            <FaShoppingCart className="text-lg" /> Shop All Accessories

          <div className="flex items-center gap-2 text-lg font-semibold">
            <FaRegClock className="text-[#D4AF37]" />
            <span>Ends in: {timeLeft}</span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default DontMiss;
