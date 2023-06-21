import React from "react";
import { FaHouseUser, FaHome } from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import { BsBank } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";

export default function Feature() {
  return (
    <div className="px-28 py-16 bg-zinc-100">
      <div className="text-center mb-10">
        <p className="text-xl tracking-wider text-gray-800 font-semibold">
          Featured Property Types
        </p>
        <p className="text-sm text-gray-600 font-medium">
          Find All Types of Properties
        </p>
      </div>
      <div className="flex justify-between">
        <FeatureCard
          icon={<BiHome size={25} />}
          color={"bg-red-400 p-2 rounded-full"}
          title={"Family House"}
          description={"122 Property"}
        />
        <FeatureCard
          icon={<FaHome size={25} />}
          color={"bg-green-400 p-2 rounded-full"}
          title={"House & Villa"}
          description={"182 Property"}
        />
        <FeatureCard
          icon={<BsBank size={25} />}
          color={"bg-yellow-400 p-2 rounded-full"}
          title={"Apartment"}
          description={"272 Property"}
        />
        <FeatureCard
          icon={<FaHouseUser size={25} />}
          color={"bg-purple-400 p-2 rounded-full"}
          title={"Office & Studio"}
          description={"103 Property"}
        />
        <FeatureCard
          icon={<IoIosHome size={25} />}
          color={"bg-blue-400 p-2 rounded-full"}
          title={"Villa & Condo"}
          description={"97 Property"}
        />
      </div>
    </div>
  );
}
