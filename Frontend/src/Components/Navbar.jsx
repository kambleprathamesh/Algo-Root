import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ navItems }) => {
  const location = useLocation();

  return (
    <div className="w-full flex flex-col items-center justify-start space-y-4 py-4">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className={`w-[75%] h-10 text-black text-lg p-3 rounded-xl flex justify-start space-x-2 font-semibold text-start leading-3.5 cursor-pointer
          ${
            location.pathname === item.path
              ? "bg-[#8e9bff]"
              : "bg-[#b8bee8] hover:bg-[#8e9bff]"
          }`}
        >
          <div>{item.icon}</div>
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
