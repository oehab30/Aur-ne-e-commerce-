// components/Darkmode.jsx
import React, { useEffect, useState } from 'react';
import { Switch } from "@/components/ui/switch";

const Darkmode = () => {
  const [mode, setMode] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Apply dark mode class
    if (mode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [mode]);

  return (
    <div
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 z-50
        transition-transform duration-500 ease-in-out
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
    >
      <Switch
        onClick={() => setMode(!mode)}
        checked={mode}
        className="shadow-lg"
      />
    </div>
  );
};

export default Darkmode;
