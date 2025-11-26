import React from 'react'
import { FaInstagram,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';
function Footer() {
  return (
    <div>
        <div>
            <h1 className='text-2xl text-white '>Auréne</h1>
            <p>Crafting luxury accessories that define elegance and sophistication.</p>
            <div className='flex gap-3 text-xl' >
<Link to="">  <FaInstagram class /> </Link>
<Link to="">  <FaFacebook /> </Link>
<Link to="">  <FaXTwitter /> </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer