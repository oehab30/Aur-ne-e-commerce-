import React from 'react'
import { FaInstagram,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';
function Footer() {
  return (
    <div className='bg-black text-[#9CA3AF] p'>
        <div>
            <h1 className='text-2xl text-white '>Auréne</h1>
            <p className='w-70'>Crafting luxury accessories that define elegance and sophistication.</p>
            <div className='flex gap-3 text-xl' >
<Link to="">  <FaInstagram className='hover:text' /> </Link>
<Link to="">  <FaFacebook className='hover:text'/> </Link>
<Link to="">  <FaXTwitter className='hover:text'/> </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer