import React from 'react'
import { FaShoppingCart ,FaRegClock } from "react-icons/fa";

function DontMiss() {
  return (
    <>
      <div className="text-center bg-linear-to-l from-[#000000] to-[#8F1C33] text-white p-6  mx-">
        <h1 className="text-3xl text-white mb-4 font-bold" >Don't Miss Out!</h1>
        <p className="mb-6 text-xl">
          Limited time offer ends soon. Use code ELEGANCE20 for 20% off your entire order!
        </p>

        <div className='flex gap-3 justify-center items-center'>
          <button className="text-black bg-[#D4AF37] p-4 rounded-2xl flex  items-center gap-3" > <FaShoppingCart className='text-lg' />Shop All Accessories</button>

         <FaRegClock />
 <h1>Ends in 2 Days</h1>
        </div>
      </div>
    </>
  )
}

export default DontMiss
