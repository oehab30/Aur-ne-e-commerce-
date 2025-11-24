import React, { useEffect, useState } from 'react';

function Darkmode() {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    if (mode) {
      document.body.classList.add('dark');
    } else
      document.body.classList.remove('dark');

  }, [mode]);


  return (
    <button className='bg-' onClick={() => document.body.classList.toggle('dark')}>
mode
    </button>
  );
}

export default Darkmode;
