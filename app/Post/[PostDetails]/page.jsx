'use client'
import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const DetailsPage = () => {
  return (
    <div className="bg-[#F9F9F9] p-1 font-[Geist]  lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 col-start-1 col-end-3 row-start-2 row-end-3">
      <div className="border-[1px] flex mt-7 gap-3 p-3 xl:m-7 xl:gap-6 mx-7 xl:mt-16 flex-col w-[300px] xs:w-[408px] xm:w-[488px] sm:w-[582px] md:w-[708px] xl:w-[929px] 2xl:w-[1190px] 3xl:w-[1535px] rounded-md bg-white border-[#D7D7D7] lg:p-8">
        <div>
          <h1 className=" text-[9px] xs:text-[10px] xm:text-[12px] md:text-lg sm:text-sm  xl:text-[22px] 2xl:text-3xl 3xl:text-[36px] 3xl:leading-[56.5px] w-72 xs:w-[372px] xm:w-[436px] sm:w-[482px] md:w-[629px] xl:w-[778px] 2xl:w-[1031px] 3xl:w-[1283px] text-[#141417]  font-normal font-Geist">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`}
          </h1>
        </div>
        <p className="text-[6px] xs:text-[9px] xm:text-[10px] sm:text-xs md:text-[15px] xl:text-lg 2xl:text-2xl 3xl:text-[31px] font-normal md:leading-6 xl:leading-8 2xl:leading-9 3xl:leading-[50px] w-[257px] xs:w-[368px]  xm:w-[422px] sm:w-[511px] md:w-[639px] xl:w-[767px] 2xl:w-[1037px] 3xl:w-[1307px] font-Geist text-[#3F3F42]">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.,`}
        </p>
        <span className=" text-[6px] xs:text-[9px] xm:text-[10px] md:text-[15px] xl:text-lg sm:text-xs font-Geist 2xl:text-2xl 3xl:text-3xl  text-[#4A94FA]">
          {` #master #abroad #usa`}
        </span>

        <div className="flex items-center rounded-lg justify-center w-[271px] h-[410px] xs:w-[380px] xs:h-[571px] xm:w-[463px] xm:h-[696px] sm:w-[555px] sm:h-[831px]  md:w-[677px] md:h-[1024px] lg:w-[654px] lg:h-[987px] xl:w-[863px] xl:h-[1321px] 2xl:w-[1116px] 2xl:h-[1677px] 3xl:w-[1455px] 3xl:h-[2175px] overflow-hidden relative">
          <Image
            src="/NMIMS.jpg"
            alt="post"
            className="absolute inset-0 w-full h-full object-cover"
            fill
          />
        </div>
      </div>

      {/* lesson */}
      <div className="border-[1px] flex p-3 xl:m-7 m-7 mx-7 w-[300px] xs:w-[408px] xm:w-[488px] sm:w-[582px] md:w-[708px] xl:w-[929px] 2xl:w-[1190px] 3xl:w-[1535px] rounded-sm bg-white border-[#D7D7D7] lg:p-8">
        <span className="flex text-6xl">“</span>
        <p className="text-sm xl:text-base 2xl:text-lg  mt-4">
          {` Seeing 100% placement reports from B-schools, you might assume that
          it’s worth pursuing MBA & you will definitely get placed at the end,
          but the reality is completely different. It’s time you start thinking
          and stop falling for not so true placement stats of B-schools`}
        </p>
      </div>

      {/* comment section */}
      <span className="flex justify-start text-[10px] sm:text-sm md:text-base 2xl:text-lg m-7 mx-7 text-[#4A94FA] ">
        {` It’s time to understand & rethink by reading these comments`}
      </span>

      <div className="border-[1px] flex p-3 xl:m-7 m-7 mx-7 w-[300px] xs:w-[408px] xm:w-[488px] sm:w-[582px] md:w-[708px] xl:w-[929px] 2xl:w-[1190px] 3xl:w-[1535px] rounded-md bg-white border-[#D7D7D7] lg:p-8">
        <p className="text-sm xl:text-base 2xl:text-lg ">
          {` They make you sign a document before placements starts. Which
          basically says that the placement team can do whatever the f they want
          and you agree to it because without it you are debarred from sitting
          for placements. Messed up system`}
        </p>
      </div>

      {/* nested comment section */}
      <div className="flex flex-col z-50">
        <div className="absolute border-[1px] h-36 w-28 mt-20 ml-24 border-r-0 border-[#D7D7D7]"></div>
        <div className="absolute border-[1px] h-[400px] w-28 mt-20 ml-[70px] border-r-0 border-[#D7D7D7]"></div>

        <div className="border-[1px] flex p-3 xl:m-7 m-7 mx-7 w-[300px] xs:w-[408px] xm:w-[488px] sm:w-[582px] md:w-[708px] xl:w-[929px] 2xl:w-[1190px] 3xl:w-[1535px] rounded-md bg-white border-[#D7D7D7] lg:p-8">
          <p className="text-sm xl:text-base 2xl:text-lg ">
            {`So I know from very close sources that the folks who generally are
            asked to opt out are those who have been unable to get any
            placements even after 2-3 months of attending interviews. These are
            the last 30% students who cannot really get past the interviews due
            to skill mismatch or communication skills gap, etc. So this kind of
            opt out message is not forced and is not a pressure tactic. It's the
            college saying I have tried my best to get companies to the college
            and give you enough opportunities to get through, but now even I
            can't help you since I cannot guarantee more companies in the future
            since it's already 2-3 months past the placement start date.`}
          </p>
        </div>

        <div className="border-[1px] flex p-3 xl:m-7 m-7 mx-7 w-[300px] xs:w-[408px] xm:w-[488px] sm:w-[582px] md:w-[708px] xl:w-[929px] 2xl:w-[1190px] 3xl:w-[1535px] rounded-md bg-white border-[#D7D7D7] lg:p-8">
          <p className="text-sm xl:text-base 2xl:text-lg ">
            {` Agree to everything. But then that clearly means that they
            don't/can't provide 100% placements. Which is the primary reason
            this "opt-out" scheme is being implemented in the first place`}
          </p>
        </div>
        <div className="absolute border-[1px] h-32 w-28 mt-52 ml-40 border-r-0 border-t-0 border-[#D7D7D7]"></div>
        <div className="border-[1px] flex p-3 xl:m-7 m-7 mx-7 w-[300px] xs:w-[408px] xm:w-[488px] sm:w-[582px] md:w-[708px] xl:w-[929px] 2xl:w-[1190px] 3xl:w-[1535px] rounded-md bg-white border-[#D7D7D7] lg:p-8">
          <p className="text-sm xl:text-base 2xl:text-lg ">
            {`Oh yes that's true. They take in a lot of people but do not have
            true 100% placements. 100% is only after the optouts.`}
          </p>
        </div>
        <div className="border-[1px] flex p-3 xl:m-7 m-7 mx-7 w-[300px] xs:w-[408px] xm:w-[488px] sm:w-[582px] md:w-[708px] xl:w-[929px] 2xl:w-[1190px] 3xl:w-[1535px] rounded-md bg-white border-[#D7D7D7] lg:p-8">
          <p className="text-sm xl:text-base 2xl:text-lg ">
            {`This is nothing new. I know of three other MBA colleges that did
            something similar with the '23 batch. I was part of one. They make
            you sign a document before placements with unethical rules such as
            this. The worst thing is the faculties are in on it. When few
            students decided to speak up, a meeting was called with the
            placement faculty incharge who then proceeded to call the students
            on stage and humiliated them as well as threatened them of punishing
            them by not allowing them to appear for 3 dream companies. Tier 2
            and below MBA colleges do anything to protect the 100% placement
            stat and also inflate their ctcs by any means necessary.`}
          </p>
        </div>
      </div>

      <div className="border-[1px] flex p-3 xl:m-7 m-7 mx-7 w-[300px] xs:w-[408px] xm:w-[488px] sm:w-[582px] md:w-[708px] xl:w-[929px] 2xl:w-[1190px] 3xl:w-[1535px] rounded-md bg-white border-[#D7D7D7] lg:p-8">
        <p className="text-sm xl:text-base 2xl:text-lg ">
          {` Indian colleges are all about placements, they will do anything to
          make their stats look good.`}
        </p>
      </div>
      <div className="border-[1px] flex p-3 xl:m-7 m-7 mx-7 w-[300px] xs:w-[408px] xm:w-[488px] sm:w-[582px] md:w-[708px] xl:w-[929px] 2xl:w-[1190px] 3xl:w-[1535px] rounded-md bg-white border-[#D7D7D7] lg:p-8">
        <p className="text-sm xl:text-base 2xl:text-lg ">
          {`This is great example that students, aspirants and parents should not
          blankly look at the brochure but take feedback from recent graduates
          as well to get the check of reality.`}
          <br />
          <br />
          {`Further, some folks are asking why would students give such a
          certificate, it's simple when you are under placement pressure that
          too with MBA curriculum, you will agree to anything that institutes
          ask you to do specially regarding placements.`}
        </p>
      </div>

      <div className="border-[1px] flex p-3 xl:m-7 m-7 mx-7 w-[300px] xs:w-[408px] xm:w-[488px] sm:w-[582px] md:w-[708px] xl:w-[929px] 2xl:w-[1190px] 3xl:w-[1535px] rounded-md bg-white border-[#D7D7D7] lg:p-8">
        <p className="text-sm xl:text-base 2xl:text-lg ">
          {` How is this new? This is a well-known tactic used in all biz colleges
          across the country where placement isn't 100%, even the newer IIMs.`}
        </p>
      </div>

      <div className="border-[1px] flex p-3 xl:m-7 m-7 mx-7 w-[300px] xs:w-[408px] xm:w-[488px] sm:w-[582px] md:w-[708px] xl:w-[929px] 2xl:w-[1190px] 3xl:w-[1535px] rounded-md bg-white border-[#D7D7D7] lg:p-8">
        <p className="text-sm xl:text-base 2xl:text-lg ">
          {`MBA colleges have this thing from a long time. Just put “opted out of
          placements” for people who haven’t got placed. They have been doing
          these on their admission brochures. The placement team is formed in
          the first year itself and people who are close friends of the
          placement committee gets the best placement and their CVs are pushed.
          Similar with the placement committee. This is the sad reality.`}
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
