import React from "react";
import { FaTimes } from "react-icons/fa";

export default function CrossPrice({ text }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="bg-red-600/60 rounded-full p-1 text-white">
        <FaTimes size={10} />
      </div>
      <p>{text}</p>
    </div>
  );
}
