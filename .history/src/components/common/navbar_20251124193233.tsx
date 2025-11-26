import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <nav className="flex justify-center items-center px-14">
      <h1>aurenw</h1>
      <div className=" flex  gap-3">
    {/* Desktop Links */}
          <div className="hidden md:flex gap-6 font-medium text-black dark:text-white">
            <Link to="/" className="hover:text-[var(--main)] dark:hover:text-[var(--main-dark)] duration-300">
              Home
            </Link>

            <Link
              to="/Shop/:category"
              className="hover:text-[var(--main)] dark:hover:text-[var(--main-dark)] duration-300"
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
      </div>
    </nav>
    </>

  );
}

export default Navbar;
