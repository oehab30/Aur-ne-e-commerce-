import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
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
  <Switch />
}

export default Darkmode;
