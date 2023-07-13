import React from "react";

export default function Banner(props) {
  const background =
    "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${background})`,
      }}
      className="justify-center  bg-no-repeat bg-cover bg-center  h-[60vh]">
      <div className="p-10 text-white flex flex-col justify-center h-full">
        <div className="mb-10">
          <p className="text-lg md:text-sm tracking-wider uppercase mb-2">
            {props.title}
          </p>
          <p className="text-lg md:text-5xl tracking-wider">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
