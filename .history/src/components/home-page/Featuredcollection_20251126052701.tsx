import React from 'react'
import { Link } from "react-router-dom";
function Featuredcollection() {
  return (
    <>
<div>
<h1 className="text-center font-bold text-4xl mb-4 mt-24 px-7 font-Playfair Display">
  Featured<br />collection</h1>
<div className='flex gap-8 p-20 w-full  rounded-2xl'>
    <Link to="/shop" > <img src="../../../public/home-pic/FC-1.png" alt=""  className='rounded-2xl'/></Link>
    <Link to="/shop" > <img src="../../../public/home-pic/FC-2.png" alt=""  className='rounded-2xl' /></Link>
    <Link to="/shop" > <img src="../../../public/home-pic/FC-3.png" alt=""  className='rounded-2xl'/></Link>
</div>
  </div>
    </>
  )
}

export default Featuredcollection