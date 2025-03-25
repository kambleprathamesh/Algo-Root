import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Layout = () => {
  return (
    <div className="w-full h-full  md:min-h-screen   flex bg-gray-100 ">
      <div className="hidden md:block w-64 bg-gray-100 text-white min-h-screen fixed ">
        <Sidebar />
      </div>

      <div className="w-full  md:ml-64 md:p-6  ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
