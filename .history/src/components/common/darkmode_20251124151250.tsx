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
    <button onClick={{{}}}>

    </button>
  );
}

export default Darkmode;
