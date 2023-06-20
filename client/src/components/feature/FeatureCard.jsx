import React from "react";

export default function FeatureCard({ icon, title, description, color }) {
    const style = color;
  return (
    <>
      <div className="shadow-sm shadow-gray-400 p-10 rounded-sm">
        <div className={style + ""}>{icon}</div>
        <p className="">{title}</p>
        <p>{description}</p>
      </div>
    </>
  );
}
