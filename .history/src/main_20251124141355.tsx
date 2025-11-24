// main.tsx
import "./assets/styles/";
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes/Routes"; // this is your router setup

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)