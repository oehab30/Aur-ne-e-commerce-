// Layout.tsx
import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Darkmode from "./Darkmode";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar    />
      <main className="min-h-screen  pt-18">
        <Outlet />        {/* 👈 Page content changes here */}
<Darkmode/>
      </main>
      <Footer  />
    </>
  );
}

export default Layout;
