import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function MainLayout() {
  return <div className="font-['Poppins']">
    <Navbar />
    <Outlet />
  </div>;
}

export default MainLayout;
