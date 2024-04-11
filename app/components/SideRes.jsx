"use client";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiUserX } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { PiKanbanBold } from "react-icons/pi";
import { MdOutlineLogin } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import React from "react";

const SideRes = ({ showMenu, setShowMenu,toggleMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]" 
      } fixed bottom-0 top-0 z-20 flex h-screen font-[Geist] border-r-[1px] border-gray-300 w-[65%] 
     bg-white px-5 pb-6 pt-16 text-black lg:hidden justify-between
     transition-all duration-700 shadow-2xl`}
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">Overview</h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 hover:bg-gray-200 p-2  rounded-md">
            <MdOutlineDashboard />
            <h1>Dashboard</h1>
          </div>
          <div className="flex items-center gap-2 hover:bg-gray-200 p-2  rounded-md">
            <FaRegUser />
            <h1>User</h1>
          </div>
          <div className="flex items-center gap-2 hover:bg-gray-200 p-2  rounded-md">
            <FiUserX />
            <h1>Employee</h1>
          </div>
          <div className="flex items-center gap-2 hover:bg-gray-200 p-2  rounded-md">
            <FiUser />
            <h1>Profile</h1>
          </div>
          <div className="flex items-center gap-2 hover:bg-gray-200 p-2  rounded-md">
            <PiKanbanBold />
            <h1>Kanban</h1>
          </div>
          <div className="flex items-center gap-2 hover:bg-gray-300 p-2  rounded-md w-full">
            <MdOutlineLogin />
            <h1>Login</h1>
          </div>
        </div>
      </div>
      <div onClick={toggleMenu} >
        <FaRegWindowClose className="w-7 h-7 -mt-12"/>
      </div>
    </div>
  );
};

export default SideRes;
