import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
npx shadcn@latest add switch
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
      <Button onClick={() => setMode(!mode)}>Click me </Button>
  );
}

export default Darkmode;
