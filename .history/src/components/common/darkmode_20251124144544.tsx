import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (

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
