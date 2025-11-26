import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <nav className="flex justify-between items-center px-14 dark:bg-white">
      <h1>aurenw</h1>
    {/* Desktop Links */}
          <div className="hidden md:flex gap-6 font-medium  dark:text-white">
            <Link to="/" className="hover:text-[var(--main)] dark:hover:text-[var(--main-dark)] duration-300">
              Home
            </Link>

            <Link
              to="/Shop/:category"
              className="hover:text-[var(--main)] dark:text-white duration-300"
            >
              Shop
            </Link>

            <Link
              to="/about"
              className="hover:text-[var(--main)] dark:hover:text-[var(--main-dark)] duration-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-[var(--main)] dark:hover:text-[var(--main-dark)] duration-300"
            >
              Contact
            </Link>


          </div>
            {/* Icons */}
          <div className="hidden md:flex items-center gap-4 text-xl text-black dark:text-white">
            <Link to="/wishlist" className="hover:text-[var(--main)] dark:hover:text-[var(--main-dark)] duration-300">
              <FaRegHeart />
            </Link>

            <Link to="/profile" className="hover:text-[var(--main)] dark:hover:text-[var(--main-dark)] duration-300">
              <IoPersonOutline />
            </Link>

            <Link to="/cart" className="hover:text-[var(--main)] dark:hover:text-[var(--main-dark)] duration-300">
              <HiOutlineShoppingBag />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            ☰
          </button>

    </nav>
    </>

  );
}

export default Navbar;
