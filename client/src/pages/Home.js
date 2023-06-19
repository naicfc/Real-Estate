import React from 'react'

export default function Home() {

  const background =
    "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${background})`,
        }}
        className="justify-center  bg-no-repeat bg-cover bg-bottom  h-[100vh]">
        <div className="p-20 text-white">dggdgdgdg</div>
      </div>
      <div className="p-20">sdfd</div>
    </>
  );
}
