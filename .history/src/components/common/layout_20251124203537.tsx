// Layout.tsx
import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Darkmode from "./Darkmode";

function Layout() {
  return (
    <>
      <Navbar  />
      <main className="min-h-screen p-4">
<Darkmode/>
        <Outlet />        {/* 👈 Page content changes here */}
      </main>
    </>
  );
}

export default Layout;
