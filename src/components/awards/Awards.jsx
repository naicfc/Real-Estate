import React from "react";
import AwardCard from "./AwardCard";
import { FaBriefcase, FaHeart, FaLightbulb, FaTrophy } from "react-icons/fa";


export default function Awards() {
  return (
    <div className="px-4 lg:px-28 py-10 bg-cyan-950 text-white">
      <div className="text-center">
        <p className="text-green-700 font-semibold tracking-wider mb-3">
          OUR AWARDS
        </p>
        <p className=" md:text-2xl capitalize">
          Over 1,240,000+ happy users work with us
        </p>
        <p className="md:text-2xl capitalize">they love our services</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 py-2">
        <AwardCard
          icon={<FaTrophy size={20} />}
          number={"32 M"}
          award={"Blue Burmin Award"}
        />
        <AwardCard
          icon={<FaBriefcase size={20} />}
          number={"43 M"}
          award={"Mimo X11 Award"}
        />
        <AwardCard
          icon={<FaLightbulb size={20} />}
          number={"51 M"}
          award={"Australian UGC Award"}
        />
        <AwardCard
          icon={<FaHeart size={20} />}
          number={"42 M"}
          award={"IITCA Green Award"}
        />
      </div>
    </div>
  );
}
