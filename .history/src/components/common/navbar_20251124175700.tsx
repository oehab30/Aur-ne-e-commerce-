import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-5 px-6 md:px-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-semibold font-[Playfair Display] "> Auréne </h1>
        </Link>

        {/* Navigation Links - Center */}
        <div className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2 font-medium text-gray-700">
        <Link to="/" className="hover:text-[var(--main)] duration-300"> Home</Link>  

            <Link to="/Shop/:category" className="hover:text-[var(--main)] duration-300">
              Shop
            </Link>

          <li>
            <Link to="/about" className="hover:text-[var(--main)] duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[var(--main)] duration-300">
              Contact
            </Link>
          </li>
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
          <button className="bg-[var(--red)] text-white px-5 py-2 h-8 rounded hover:opacity-90 duration-300">
            Login
          </button>
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
        <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 text-[var(--gray)] z-50">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[var(--main)] duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Shop/:category" onClick={() => setMenuOpen(false)} className="hover:text-[var(--main)] duration-300">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[var(--main)] duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[var(--main)] duration-300">
              Contact
            </Link>
          </li>
          <button className="bg-[var(--red)] text-white px-5 py-2 rounded hover:opacity-90 duration-300">
            Login
          </button>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
