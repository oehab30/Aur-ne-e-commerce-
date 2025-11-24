import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart   } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-20 h-">
      {/* Logo */}
      <Link to="/" className="flex items-center">
      <h1 className="text-2xl font-semibold font-[Playfair Display]">Auréne</h1>
      </Link>

      {/* Desktop Menu */}
   <ul className="hidden md:flex gap-6 font-medium  ]">
  <li><Link to="/" className="hover:text-[var(--main)] duration-300 ">Home</Link></li>
  <li><Link to="/Shop/:category" className="hover:text-[var(--main)] duration-300">Shop</Link></li>
  <li><Link to="/about" className="hover:text-[var(--main)] duration-300">About</Link></li>
  <li><Link to="/contact" className="hover:text-[var(--main)] duration-300">Contact</Link></li>
</ul>
<div className=" flex gap-4 font-medium text-xl  ]">
  <Link to="wishlist" className="hover:text-[var(--main)] duration-300 "><FaRegHeart /></Link>
  <Link to="/profile" className="hover:text-[var(--main)] duration-300"><IoPersonOutline /></Link>
 <Link to="/cart" className="hover:text-[var(--main)] duration-300"><HiOutlineShoppingBag/></Link>

</div>
      {/* Login button */}
      <button className="hidden md:block bg-[var(--red)] text-white px-5 py-2 h-8 rounded">
        Login
      </button>

      {/* Mobile menu icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl text-[var(--gray)] "
      >
        ☰
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-[-2.2rem] w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden font-medium text-[var(--gray)] z-50 " >
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
          <li><Link to="/admin" onClick={() => setMenuOpen(false)}>admin</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <button className="bg-[var(--red)] text-white px-5 py-2 rounded">Login</button>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
