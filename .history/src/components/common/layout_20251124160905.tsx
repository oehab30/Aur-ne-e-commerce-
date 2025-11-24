// Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />          {/* Always visible */}
      <main className="min-h-screen p-4">
dra
        <Outlet />        {/* 👈 Page content changes here */}
      </main>
    </>
  );
}

export default Layout;
