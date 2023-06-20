import React from "react";
import BannerForm from "./BannerForm";
import SearchBox from "./SearchBox";

export default function HomeBanner() {
  const background =
    "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${background})`,
      }}
      className="justify-center  bg-no-repeat bg-cover bg-bottom  h-[100vh]">
      <div className="p-10 text-white flex flex-col items-center justify-center h-full">
        <div className="text-center mb-10">
          <p className="text-6xl tracking-wider">Search For Your Next Home</p>
          <p className="text-lg">
            Find new & featured properties in your local city
          </p>
        </div>
        <form action="">
          <div className="grid grid-cols-4 bg-zinc-100 rounded-sm">
            <BannerForm
              name={"city"}
              placeholder={"Location"}
            />
            <BannerForm
              name={"location"}
              placeholder={"Property Type"}
            />
            <BannerForm
              name={"citybox"}
              placeholder={"Price Range"}
            />
            <SearchBox />
          </div>
        </form>
      </div>
    </div>
  );
}
