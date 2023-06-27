import React from 'react'
import liverpool from "../../assets/images/liverpool.jpg";
import newyork from "../../assets/images/new-york.jpg";
import montreal from "../../assets/images/montreal.jpg";
import losangeles from "../../assets/images/los-angeles.jpg";
import orleans from "../../assets/images/new-orleans.jpg";
import jersey from "../../assets/images/jersey.jpg";
import ExploreCard from './ExploreCard';

export default function Explore() {
  return (
    <div className=" px-4 lg:px-28 py-16">
      <div className="text-center mb-10">
        <p className="text-xl mb-2 tracking-wider text-gray-800 font-semibold capitalize">
          explore by location
        </p>
        <p className="text-sm text-gray-600 font-medium w-full md:w-[70%] mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia at
          asperiores praesentium mollitia ipsam similique consectetur veniam
          doloribus voluptas commodi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <ExploreCard background={orleans} location={"New orleans, USA"} />
        <ExploreCard background={liverpool} location={"Liverpool, UK"} />
        <ExploreCard background={jersey} location={"New Jersey, USA"} />
        <ExploreCard background={montreal} location={"Montreal, Canada"} />
        <ExploreCard background={losangeles} location={"Los Angeles, USA"} />
        <ExploreCard background={newyork} location={"New York, USA"} />
      </div>
    </div>
  );
}
