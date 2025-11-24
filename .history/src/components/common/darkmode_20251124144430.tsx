import React, { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Load saved preference
  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

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
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default DarkModeToggle;
