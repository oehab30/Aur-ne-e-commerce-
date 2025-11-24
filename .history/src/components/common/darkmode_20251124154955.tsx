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
      <But>Click me</But
      className="bg-amber-200 p-6 rounded"
      onClick={() => setMode(!mode)} >
</Button>
  );
}

export default Darkmode;
