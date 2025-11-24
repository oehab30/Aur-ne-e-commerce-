import React, { useState } from 'react';

const Darkmode = () => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    // toggle class directly on <html> so Tailwind dark: works site-wide
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleDark}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
    >
      {dark ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default Darkmode;
