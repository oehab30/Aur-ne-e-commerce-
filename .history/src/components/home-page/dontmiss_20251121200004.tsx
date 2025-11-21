import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaRegClock } from "react-icons/fa";

function DontMiss() {
  const [timeLeft, setTimeLeft] = useState<string>("");

  // Countdown Timer (2 days example)
  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2); // ends in 2 days

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
      <div className="text-center mx-4 md:mx-24 bg-gradient-to-r from-black to-[#8F1C33] text-white px-6 py-10 rounded-2xl shadow-xl animate-gradient flex-row-reverse">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Don't Miss Out!
        </h1>

        <p className="mb-6 text-lg md:text-xl opacity-90">
          Limited time offer ends soon. Use code{" "}
          <span className="font-bold text-[#D4AF37]">ELEGANCE20</span> for 20%
          off your entire order!
        </p>

        {/* Buttons + Timer */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-[#D4AF37] hover:bg-[#b7922f] transition text-black py-4 px-6 rounded-xl flex items-center gap-3 font-semibold shadow-lg">
            <FaShoppingCart className="text-lg" /> Shop All Accessories
          </button>

          <div className="flex items-center gap-2 mt-2 md:mt-0 text-lg font-semibold">
            <FaRegClock className="text-[#D4AF37]" />
            <span>Ends in: {timeLeft}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DontMiss;
