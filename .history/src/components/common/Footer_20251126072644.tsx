import React from 'react'
import { FaInstagram,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
        <div>
            <h1 className='text-2xl text-white '>Auréne</h1>
            <p>Crafting luxury accessories that define elegance and sophistication.</p>
            <div className='flex' >
<FaInstagram />
<FaFacebook />
<FaXTwitter />

            </div>
        </div>
    </div>
  )
}

export default Footer