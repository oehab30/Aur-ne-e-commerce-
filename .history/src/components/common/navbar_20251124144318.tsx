import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 h-16 md:h-20 max-w-[1280px] mx-auto">
      {/* Logo */}
      <Link to="/" className="flex items-center">
      <h1 className="text-2xl font-semibold font-[Playfair Display]">Auréne</h1>
      </Link>

      {/* Desktop Menu */}
   <ul className="hidden md:flex gap-6 font-medium  ]">
  <li><Link to="/" className="hover:text-[var(primary)] ">Home</Link></li>
  <li><Link to="/Shop/:category" className="hover:text-[var(primary)] transition">Shop</Link></li>
  <li><Link to="/about" className="hover:text-[var(primary)] transition">About</Link></li>
  <li><Link to="/contact" className="hover:text-[var()] transition">Contact</Link></li>
  <li><Link to="/contact" className="hover:text-[var()] transition">Contact</Link></li>
  <li><Link to="/contact" className="hover:text-[var()] transition">Contact</Link></li>
  <li>  <Link to="/admin" className="hover:text-[var(--primary)] duration-400">Admin</Link></li>
</ul>

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
