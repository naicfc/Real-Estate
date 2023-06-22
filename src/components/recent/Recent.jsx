import React from "react";
import RecentCard from "./RecentCard";
import Image1 from '../../assets/images/project1.jpg'
import Image2 from "../../assets/images/project4.jpg";
import Image3 from "../../assets/images/project6.jpg";

export default function Recent() {
  return (
    <div className=" px-4 lg:px-28 py-16">
      <div className="text-center mb-10">
        <p className="text-xl mb-2 tracking-wider text-gray-800 font-semibold">
          Recently Listed Property
        </p>
        <p className="text-sm text-gray-600 font-medium w-full md:w-[70%] mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia at
          asperiores praesentium mollitia ipsam similique consectetur veniam
          doloribus voluptas commodi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <RecentCard
          url={Image1}
          status={"available"}
          name={"Nai properties"}
          location={"La Palmwine"}
          price={"$62,000"}
          type={"apartment"}
        />
        <RecentCard
          url={Image2}
          status={"available"}
          name={"Nai properties"}
          location={"La Palmwine"}
          price={"$20,000"}
          type={"apartment"}
        />
        <RecentCard
          url={Image3}
          status={"available"}
          name={"Nai properties"}
          location={"La Palmwine"}
          price={"$39,000"}
          type={"apartment"}
        />
      </div>
    </div>
  );
}
