import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0   shadow-md z-100">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-5 px-6 md:px-16 bg-white">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-semibold font-[Playfair Display] dark:text-white">Auréne</h1>
        </Link>

        {/* Navigation Links - Center */}
        <div className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2 font-medium  dark:text-white">
          <Link to="/" className="hover:text-[var(--main)] duration-300">Home</Link>
          <Link to="/Shop/:category" className="hover:text-[var(--main)] duration-300">Shop</Link>
          <Link to="/about" className="hover:text-[var(--main)] duration-300">About</Link>
          <Link to="/contact" className="hover:text-[var(--main)] duration-300">Contact</Link>
        </div>

        {/* Icons + Login - Right */}
        <div className="hidden md:flex items-center gap-4 text-xl">
          <Link to="/wishlist" className="hover:text-[var(--main)] duration-300">
            <FaRegHeart />
          </Link>
          <Link to="/profile" className="hover:text-[var(--main)] duration-300">
            <IoPersonOutline />
          </Link>
          <Link to="/cart" className="hover:text-[var(--main)] duration-300">
            <HiOutlineShoppingBag />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[var(--gray)] focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 text-[var(--gray)] z-50">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--main)] duration-300" >Home</Link>
            <Link
              to="/Shop/:category"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--main)] duration-300"> Shop</Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--main)] duration-300"> About</Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--main)] duration-300">contact </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
