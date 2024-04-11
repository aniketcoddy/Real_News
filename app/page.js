"use client"
import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";
import { useState } from "react";
import SideRes from "./components/SideRes";
import Post from "./Post/page";


export default function Home() {

  return (
    <main className="bg-[#F9F9F9] p-1 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 col-start-1 col-end-3 row-start-2 row-end-3 ">
     <Post/>
  </main>
  );
}
