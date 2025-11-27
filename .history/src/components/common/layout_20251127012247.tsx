// Layout.tsx
import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Darkmode from "./Darkmode";
import Footer from "./Footer";

function Layout() {
  return (
    <>
<Darkmode/>
      <Navbar    />
      <main className="min-h-screen  pt-18">
        <Outlet />        {/* 👈 Page content changes here */}
      </main>
      <Footer  />
    </>
  );
}

export default Layout;
