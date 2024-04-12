'use client'
import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Post = () => {

  
  const truncateTitle = (inputText) => {
    const words = inputText.split(' ');
    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + '...';
    }
    return inputText;
  };

  const truncateDes = (inputText) => {
    const words = inputText.split(' ');
    if (words.length > 26) {
      return words.slice(0, 26).join(' ') + '...';
    }
    return inputText;
  };

  return (
    <div className="bg-[#F9F9F9] p-1 font-[Geist]  lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 col-start-1 col-end-3 row-start-2 row-end-3">
      <div className="p-4 flex w-[350px] xs:w-[440px] xm:w-[530px] sm:w-[617px] md:w-[732px] xl:w-[929px] 2xl:w-[1172px] 3xl:w-[1555px] flex-col lg:mx-8  gap-6">
        <div className="flex justify-end">
          <Link href="/Admin">
            <span className="font-Geist text-[#0066FF] font-medium text-xs md:text-[14px]  xl:text-lg 2xl:text-xl 3xl:text-2xl">
              Create a Post
            </span>
          </Link>
        </div>
        <Link href="/Post/1" className="border-[1px] flex flex-col xl:gap-5 gap-2 w-[322px] xs:w-[421px] xm:w-[506px] sm:w-[589px] md:w-[713px]  xl:w-[897px] 2xl:w-[1161px] 3xl:w-[1548px] rounded-md bg-white border-[#D7D7D7] xl:p-10 p-4 ">
          <div className="flex justify-between">
            <h1 className=" text-[9px] xs:text-[10px] xm:text-[12px] md:text-lg sm:text-sm xl:text-[22px] 2xl:text-3xl 3xl:text-[42px] text-[#141417]  font-normal font-Geist">
              {truncateTitle(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`)}
            </h1>
            <div className="flex xl:gap-6 gap-3">
              <FiEdit className=" w-3 h-3 sm:w-4 sm:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-8 3xl:h-8" />
              <IoEyeOutline className=" w-3 h-3 sm:w-4 sm:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-8 3xl:h-8" />
            </div>
          </div>
          <p className="text-[7px] xs:text-[9px] xm:text-[10px] sm:text-xs md:text-[15px] xl:text-lg 2xl:text-[23px] 3xl:text-[31px] font-normal md:leading-7 xl:leading-8 2xl:leading-9 3xl:leading-[50px] w-[282px] xs:w-[366px] xm:w-[453px] sm:w-[511px] md:w-[639px] xl:w-[767px] 2xl:w-[1037px] 3xl:w-[1399px] font-Geist text-[#3F3F42]">

          {truncateDes(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.,`)}
          </p>
          <span className=" text-[7px] xs:text-[9px] xm:text-[10px] md:text-[15px] xl:text-lg sm:text-xs font-Geist 2xl:text-[23px] 3xl:text-3xl  text-[#4A94FA]">
           {` #master #abroad #usa`}
          </span>                             
          <div className="flex items-center rounded-md justify-center w-[266px] h-[123px] xs:w-[362px] xs:h-[163px] xm:w-[449px] xm:h-[205px] sm:w-[526px] sm:h-[240px]  md:w-[644px] md:h-[288px] xl:w-[766px] xl:h-[351px] 2xl:w-[1026px] 2xl:h-[455px] 3xl:w-[1399px] 3xl:h-[635px] overflow-hidden relative">
            <Image
              src="/NMIMS.jpg"
              alt="post"
              className="absolute inset-0 w-full h-full object-cover"
              fill
            />
          </div>
          <div className="flex gap-3">
            <div className=" border-[1px] border-[#D7D7D7] p-1  text-gray-500  px-2 rounded-md flex justify-center items-center gap-1">
              <FaRegComment className="w-3 h-3 sm:w-4 sm:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
              <p className="text-[12px] text-[#707680] xl:text-base 2xl:text-lg ">2</p>
            </div>
            <p className="border-[1px] text-[12px] border-[#D7D7D7] xl:text-base 2xl:text-lg  text-[#707680]  p-1 px-2 rounded-md text-xs">
             {` April,24`}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
