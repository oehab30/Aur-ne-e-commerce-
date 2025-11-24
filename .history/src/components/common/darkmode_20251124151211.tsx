import React, { useEffect, useState } from 'react';

function Darkmode() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    if (mode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [mode]);


  return (
    <button
      onClick=}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {mode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default Darkmode;
