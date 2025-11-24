import React, { useState, useEffect } from "react";

const DarkModeButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved mode from localStorage when component mounts
  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark"); // Apply dark mode globally
    }
  }, []); // empty dependency → run only once on mount

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
    >
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default DarkModeButton;
