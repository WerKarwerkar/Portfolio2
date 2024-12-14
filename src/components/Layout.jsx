import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import StarryBackground from "./StarryBackground";

const Layout = () => {
  return (
    <div className="relative w-full h-full">
      <StarryBackground />

      <div className="relative z-10">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
