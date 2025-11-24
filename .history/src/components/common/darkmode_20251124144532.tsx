import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-[Playfair Display] text-gray-900 dark:text-gray-100">
        Auréne
      </h1>

      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
};

export default Navbar;
