import { FaTasks } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import React from "react";
export const navItems = [
  { id: 1, name: "All Tasks", path: "/tasks", icon: <FaTasks /> },
  { id: 2, name: "Create Tasks", path: "/create", icon: <FaPlus /> },
  { id: 3, name: "Modify Task", path: "/modify-task", icon: <RiEditBoxFill /> },
];

export const extraData = [
  {
    id: 1,
    name: "Settings",
    path: "/settings",
    icon: <MdOutlineSettingsSuggest />,
  },
  { id: 2, name: "Profile", path: "/profile", icon: <CgProfile /> },

  { id: 3, name: "Logout", path: "/logout", icon: <CiLogout /> },
];
