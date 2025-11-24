import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/Menu/:category", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/admin", label: "Admin" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 h-16 md:h-20 max-w-[1280px] mx-auto">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/public/home-pic/brand_logo.png"
          alt="Logo"
          className="h-8 md:h-10"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium text-[var(--primary)]">
        {navLinks.map(({ to, label }) => (
          <li key={label}>
            <Link
              to={to}
              className="hover:text-[var(--buttons)] transition"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login button (Desktop) */}
      <button className="hidden md:block bg-[var(--buttons)] text-white px-5 py-2 h-8 rounded">
        Login
      </button>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl text-[var(--gray)]"
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden font-medium text-[var(--gray)] z-50">
          {navLinks.map(({ to, label }) => (
            <li key={label}>
              <Link
                to={to}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}

          <button className="bg-[var(--buttons)] text-white px-5 py-2 rounded">
            Login
          </button>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
