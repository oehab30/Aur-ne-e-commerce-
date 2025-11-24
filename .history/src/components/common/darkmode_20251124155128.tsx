import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
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
      <Button className="bg-amber-200 p-6 rounded"
      onClick={() => setMode(!mode)}>Click me </Button>
  );
}

export default Darkmode;
