import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

export default function CheckPrice({ text }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="bg-green-600/60 rounded-full p-1 text-white">
        <AiOutlineCheck size={10}/>
      </div>
      <p>{text}</p>
    </div>
  );
}
