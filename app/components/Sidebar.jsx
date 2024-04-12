'use client';
import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiUserX } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { PiKanbanBold } from "react-icons/pi";
import { MdOutlineLogin } from "react-icons/md";
import SideRes from "./SideRes";


const Sidebar = ({ showMenu, setShowMenu }) => {
  
  return (
    <div className="hidden lg:flex border-r-[1px] font-[Geist] border-gray-300 overflow-auto  p-6 col-start-1 col-end-2 row-start-2 row-end-3">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">Overview</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
          <MdOutlineDashboard />
          <h1>
            Dashboard
          </h1>
          </div>
          <div className="flex items-center gap-2">
          <FaRegUser />
            <h1>
              User
            </h1>
          </div>
          <div className="flex items-center gap-2">
          <FiUserX />
            <h1>
              Employee
            </h1>
          </div>
          <div className="flex items-center gap-2">
          <FiUser />
            <h1>Profile</h1>
          </div>
          <div className="flex items-center gap-2">
          <PiKanbanBold />
            <h1>
              Kanban
            </h1>
          </div>
          <div className="flex items-center gap-2">
          <MdOutlineLogin />
            <h1>
              Login
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
