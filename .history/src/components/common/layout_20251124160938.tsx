// Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Darkmode from "./darkmode";

function Layout() {
  return (
    <>
      <Navbar />          {/* Always visible */}
      <main className="min-h-screen p-4">
        <Outlet />        {/* 👈 Page content changes here */}
<Darkmode/>
      </main>
    </>
  );
}

export default Layout;
