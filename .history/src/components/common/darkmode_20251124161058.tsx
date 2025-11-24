import React, { useEffect, useState } from 'react';
import { Switch } from "@/components/ui/switch"
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
    <>
      <Switch  onClick={() => setMode(!mode)} className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50">

      </Switch>
    </>
  );
}

export default Darkmode;
