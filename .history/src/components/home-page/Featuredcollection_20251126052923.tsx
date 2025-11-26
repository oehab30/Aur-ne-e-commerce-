import React from 'react'
import { Link } from "react-router-dom";
function Featuredcollection() {
  return (
    <>
<div>
<h1 className="text-center font-bold text-4xl mb-4 mt-24 px-7 font-Playfair Display">
  Featured<br />collection</h1>
<div className='flex gap-8 p-20 w-full  rounded-2xl overflow-x-auto px-4 snap-x snap-mandatory scrollbar-hide md:flex-wrap md:justify-center'>
    <Link to="/shop" > <img src="../../../public/home-pic/FC-1.png" alt=""  className='rounded-2xl w-full h-full object-cover hover:scale-105 transition-transform duration-300'/></Link>
    <Link to="/shop" > <img src="../../../public/home-pic/FC-2.png" alt=""  className='rounded-2xlw-full h-full object-cover hover:scale-105 transition-transform duration-300' /></Link>
    <Link to="/shop" > <img src="../../../public/home-pic/FC-3.png" alt=""  className='rounded-2xl w-full h-full object-cover hover:scale-105 transition-transform duration-300'/></Link>
</div>
  </div>
    </>
  )
}

export default Featuredcollection