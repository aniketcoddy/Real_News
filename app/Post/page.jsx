import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Post = () => {
  return (
    <div>
      <div className="p-4 flex font-[Geist] flex-col lg:mx-8 gap-6">
        <div className="flex justify-end">
          <Link href="/Admin">
            <span className="text-xs font-Geist text-[#0066FF] font-medium">
              Create a Post
            </span>
          </Link>
        </div>
        <Link href="/Post/1" className="border-[1px] flex flex-col gap-3 rounded-md bg-white border-[#D7D7D7] lg:p-6 p-3">
          <div className="flex justify-between">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#141417] line-clamps-1 font-medium font-Geist">
              Any leads or referrals please!
            </h1>
            <div className="flex gap-3">
              <FiEdit className="xl:w-5 xl:h-5" />
              <IoEyeOutline className="xl:w-5 xl:h-5" />
            </div>
          </div>
          <p className="text-xs sm:text-sm md:text-base  font-Geist text-[#3F3F42] line-clamp-2 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br /> industry's standard dummy
            text ever since the 1500s,
          </p>
          <span className="text-xs font-Geist text-[#4A94FA]">
            #master #abroad #usa
          </span>
          <div class="flex items-center rounded-md justify-center w-72 h-36 sm:w-[480px] sm:h-[240px]  md:w-[580px] md:h-[290px] xl:w-[780px] xl:h-[350px]  overflow-hidden relative">
            <Image
              src="/NMIMS.jpg"
              alt="post"
              class="absolute inset-0 w-full h-full object-cover"
              fill
            />
          </div>
          <div className="flex gap-3">
            <div className=" border-[1px] border-[#D7D7D7] p-1  text-gray-500 font-medium  px-2 rounded-md flex items-center gap-1">
              <FaRegComment className="w-3 h-3 xl:w-5 xl:h-5" />
              <p className="text-xs text-[#707680] xl:text-sm">2</p>
            </div>
            <p className="border-[1px] xl:text-sm border-[#D7D7D7] text-[#707680] font-medium  p-1 px-2 rounded-md text-xs">
              April,24
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
