import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function MainLayout() {
  return (
    <div className="font-['Poppins']">
      <Navbar>
        <Outlet />
      </Navbar>
      <Footer />
    </div>
  );
}

export default MainLayout;
