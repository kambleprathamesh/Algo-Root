import React from "react";
import Navbar from "../Components/Navbar";
import { navItems } from "../NavData";
import { extraData } from "../NavData";
const Sidebar = () => {
  return (
    <div className="min-h-screen  bg-[#d8dbf3] flex-col rounded-r-2xl">
      <div >
        <Navbar navItems={navItems} />
      </div>

      <div className=" mt-60">
        <Navbar navItems={extraData} />
      </div>
    </div>
  );
};

export default Sidebar;
