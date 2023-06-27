import React from "react";

export default function AwardCard({ icon, number, award }) {
  return (
    <div className="p-2">
      <div className="p-3 flex items-center justify-center">
        <div className="bg-cyan-800 p-4 rounded-tr-3xl rounded-bl-3xl">{icon}</div>
      </div>
      <div className="text-center">
        <p className="px-4 text-xl font-semibold tracking-wider">{number}</p>
        <p className="px-1 text-xs text-gray-400">{award}</p>
      </div>
    </div>
  );
}
