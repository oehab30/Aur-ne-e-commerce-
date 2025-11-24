import React, { useEffect, useState } from 'react';

function Darkmode() {
  const [mode, SetMode] = useState(true);

  useEffect(() => {
    if (mode) {
      document.body.classList.add('dark');
    } else
      document.body.classList.remove('dark');

  }, [mode]);


  return (
    <button className='bg-amber-200 p-6' onClick={() => ('dark')}>
mode
    </button>
  );
}

export default Darkmode;
