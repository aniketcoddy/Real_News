import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const DetailsPage = () => {
  return (
    <div className="bg-[#F9F9F9] p-1 font-[Geist]  lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 col-start-1 col-end-3 row-start-2 row-end-3">
      <div className="border-[1px] flex m-7 gap-6 mx-14 flex-col  rounded-md bg-white border-[#D7D7D7] lg:p-4 p-3">
        <div className="flex justify-between">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#141417] line-clamps-1 font-medium font-Geist">
            Any leads or referrals please!
          </h1>
        </div>
        <p className="text-xs sm:text-sm md:text-base  font-Geist text-[#3F3F42] line-clamp-2 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br /> Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <span className="text-xs font-Geist text-[#4A94FA]">
          #master #abroad #usa
        </span>
        <Image
          src="/NMIMS.jpg"
          alt="pic"
          width={400}
          height={400}
          className="object-contain rounded-md"
        />
      </div>

      {/* lesson */}
      <div className="border-[1px] flex m-7 mx-14 gap-3 rounded-md bg-white border-[#D7D7D7] lg:p-4 p-3">
        <span className="flex text-6xl">“</span>
        <p className="text-sm mt-4">
          Seeing 100% placement reports from B-schools, you might assume that
          it’s worth pursuing MBA & you will definitely get placed at the end,
          but the reality is completely different. It’s time you start thinking
          and stop falling for not so true placement stats of B-schools{" "}
        </p>
      </div>

      {/* comment section */}
      <span className="text-xs font-medium font-Geist m-7 mx-14 text-[#4A94FA] ">
        It’s time to understand & rethink by reading these comments
      </span>

      <div className="border-[1px] flex m-4 mx-14 gap-3 rounded-md bg-white border-[#D7D7D7] lg:p-4 p-3">
        <p className="text-sm">
          They make you sign a document before placements starts. Which
          basically says that the placement team can do whatever the f they want
          and you agree to it because without it you are debarred from sitting
          for placements. Messed up system
        </p>
      </div>

      {/* nested comment section */}
      <div className="flex flex-col z-50">
        <div className="absolute border-[1px] h-36 w-28 mt-20 ml-24 border-r-0 border-[#D7D7D7]"></div>
        <div className="absolute border-[1px] h-[400px] w-28 mt-20 ml-[70px] border-r-0 border-[#D7D7D7]"></div>

        <div className="border-[1px] flex m-7 mx-14 gap-3 rounded-md z-50 bg-white border-[#D7D7D7] lg:p-4 p-3">
          <p className="text-sm">
            So I know from very close sources that the folks who generally are
            asked to opt out are those who have been unable to get any
            placements even after 2-3 months of attending interviews. These are
            the last 30% students who cannot really get past the interviews due
            to skill mismatch or communication skills gap, etc. So this kind of
            opt out message is not forced and is not a pressure tactic. It's the
            college saying I have tried my best to get companies to the college
            and give you enough opportunities to get through, but now even I
            can't help you since I cannot guarantee more companies in the future
            since it's already 2-3 months past the placement start date.
          </p>
        </div>

      
        <div className="border-[1px] z-50 flex m-2   mx-14 ml-32 gap-3 rounded-md bg-white border-[#D7D7D7] lg:p-4 p-3">
          <p className="text-sm ">
            Agree to everything. But then that clearly means that they
            don't/can't provide 100% placements. Which is the primary reason
            this "opt-out" scheme is being implemented in the first place
          </p>
        </div>
  <div className="absolute border-[1px] h-32 w-28 mt-52 ml-40 border-r-0 border-t-0 border-[#D7D7D7]"></div>
        <div className="border-[1px] z-50 flex m-7 mx-14 ml-44 gap-3 rounded-md bg-white border-[#D7D7D7] lg:p-4 p-3">
          <p className="text-sm ">
            Oh yes that's true. They take in a lot of people but do not have
            true 100% placements. 100% is only after the optouts.
          </p>
        </div>
        <div className="border-[1px] flex z-50 m-7 mx-14 ml-24 gap-3 rounded-md bg-white border-[#D7D7D7] lg:p-4 p-3">
          <p className="text-sm ">
            This is nothing new. I know of three other MBA colleges that did
            something similar with the '23 batch. I was part of one. They make
            you sign a document before placements with unethical rules such as
            this. The worst thing is the faculties are in on it. When few
            students decided to speak up, a meeting was called with the
            placement faculty incharge who then proceeded to call the students
            on stage and humiliated them as well as threatened them of punishing
            them by not allowing them to appear for 3 dream companies. Tier 2
            and below MBA colleges do anything to protect the 100% placement
            stat and also inflate their ctcs by any means necessary.
          </p>
        </div>
      </div>

      <div className="border-[1px] flex m-7 mx-14 gap-3 rounded-md bg-white border-[#D7D7D7] lg:p-4 p-3">
        <p className="text-sm ">
          Indian colleges are all about placements, they will do anything to
          make their stats look good.
        </p>
      </div>
      <div className="border-[1px] flex m-7 mx-14 gap-3 rounded-md bg-white border-[#D7D7D7] lg:p-4 p-3">
        <p className="text-sm ">
          This is great example that students, aspirants and parents should not
          blankly look at the brochure but take feedback from recent graduates
          as well to get the check of reality.
          <br />
          <br />
          Further, some folks are asking why would students give such a
          certificate, it's simple when you are under placement pressure that
          too with MBA curriculum, you will agree to anything that institutes
          ask you to do specially regarding placements.
        </p>
      </div>

      <div className="border-[1px] flex m-7 mx-14 gap-3 rounded-md bg-white border-[#D7D7D7] lg:p-4 p-3">
        <p className="text-sm ">
          How is this new? This is a well-known tactic used in all biz colleges
          across the country where placement isn't 100%, even the newer IIMs.
        </p>
      </div>

      <div className="border-[1px] flex m-7 mx-14 gap-3 rounded-md bg-white border-[#D7D7D7] lg:p-4 p-3">
        <p className="text-sm ">
          MBA colleges have this thing from a long time. Just put “opted out of
          placements” for people who haven’t got placed. They have been doing
          these on their admission brochures. The placement team is formed in
          the first year itself and people who are close friends of the
          placement committee gets the best placement and their CVs are pushed.
          Similar with the placement committee. This is the sad reality.
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
