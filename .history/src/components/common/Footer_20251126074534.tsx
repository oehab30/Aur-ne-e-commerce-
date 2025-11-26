import React from 'react'
import { FaInstagram,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';
function Footer() {
  return (
    <div className='bg-black text-[#9CA3AF] p-15 flex  justify-evenly'>


        <div>
            <h1 className='text-2xl text-white mb-6 '>Auréne</h1>
            <p className='w-70 mb-4'>Crafting luxury accessories that define elegance and sophistication.</p>
                 <div className='flex gap-3 text-xl' >
<Link to="">  <FaInstagram className='hover:text' /> </Link>
<Link to="">  <FaFacebook className='hover:text'/> </Link>
<Link to="">  <FaXTwitter className='hover:text'/> </Link>
                 </div>
        </div>


                         <div  className=' flex flex-col gap-3 '>
                            <h1 className='text-2xl text-white mb-6 '>Shop</h1>
                        <Link to="" className='hover:text-[var(--main)] duration-300'> Watches   </Link>
                        <Link to="" className='hover:text-[var(--main)] duration-300'> Bags   </Link>
                        <Link to="" className='hover:text-[var(--main)] duration-300'> Bracelets   </Link>
                        <Link to="" className='hover:text-[var(--main)] duration-300'> New Arrivals   </Link>
                     </div>

                         <div  className=' flex flex-col gap-3 '>
                            <h1 className='text-2xl text-white mb-6 '>Support</h1>
                        <Link to="" className='hover:text-[var(--main)] duration-300'> Contact Us   </Link>
                        <Link to="" className='hover:text-[var(--main)] duration-300'> Guide   </Link>
                        <Link to="" className='hover:text-[var(--main)] duration-300'> Returns   </Link>
                        <Link to="" className='hover:text-[var(--main)] duration-300'> New Arrivals   </Link>
                     </div>

    </div>
  )
}

export default Footer