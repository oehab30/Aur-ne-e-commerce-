import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <nav className="flex justify-center item">
      <h1>aurenw</h1>
      <div className=" flex  gap-3">
        <link rel="stylesheet" href="" />
        <link rel="stylesheet" href="" />
        <link rel="stylesheet" href="" />
      </div>
    </nav>
    </>

  );
}

export default Navbar;
