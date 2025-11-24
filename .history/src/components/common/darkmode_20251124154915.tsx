import React, { useEffect, useState } from 'react';

function Darkmode() {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    if (mode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [mode]);

  return (
    <button
      className="bg-amber-200 p-6 rounded"
      onClick={() => setMode(!mode)} // fixed syntax here>
    </button>
  );
}

export default Darkmode;
