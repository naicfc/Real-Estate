import React from "react";

export default function ExploreCard({ background,location }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(${background})`,
      }}
      className="flex justify-center items-center rounded-sm h-52 bg-cover bg-center p-2">
      <div className="text-center bg-black/20 text-white rounded-sm h-[90%] w-[90%] flex justify-center items-center">
        <div>
          <p className="text-sm font-semibold tracking-wider mb-2">{location}</p>
          <p className="text-xs">10 Villas 07 Offices 10 Apartments</p>
        </div>
      </div>
    </div>
  );
}
