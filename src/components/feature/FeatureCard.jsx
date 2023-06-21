import React from "react";

export default function FeatureCard({ icon, title, description, color }) {
    const style = color;
  return (
    <>
      <div className="shadow-sm shadow-gray-400 p-6 rounded-sm cursor-pointer">
        <div className="p-3 flex items-center justify-center">
          <div className={style}>{icon}</div>
        </div>
        <div className="text-center">
          <p className="px-4 text-sm text-gray-800 font-semibold">{title}</p>
          <p className="px-1 text-xs text-gray-600">{description}</p>
        </div>
      </div>
    </>
  );
}
