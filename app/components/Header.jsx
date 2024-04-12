'use client'
import React from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const Header = ({ showMenu, setShowMenu ,toggleMenu}) => {
  return (
    <header className="bg-[#fff] border-b-[1px] font-[Geist] border-gray-300 col-start-1 col-end-3  row-start-1 row-end-2 ">
      {/* product section */}
      <div className="flex justify-between mt-3 items-center px-4 ">
       
        <FaRegNewspaper className="h-7 w-7 hidden lg:flex"  />
        <button onClick={toggleMenu}>
        <IoMenu className="h-7 w-7 lg:hidden flex" />
        </button>
       
        <div className="flex gap-3 items-center">
          <FaRegCircleUser className="h-8 text-gray-500 w-8"/>
          <button className="ring-[1px] p-1 ring-gray-400 rounded-md">
            <MdOutlineLightMode className="h-6 w-6"/>
          </button>
        </div>
      </div>

      <div></div>
    </header>
  );
};

export default Header;
