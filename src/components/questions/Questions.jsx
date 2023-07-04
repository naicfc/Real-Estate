import React from "react";

export default function Questions() {
  return (
    <div className="lg:px-28 px-4 py-6 bg-green-600 flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="text-white">
        <h1 className="capitalize text-2xl text-center md:text-3xl font-semibold tracking-wider">
          do you have questions?
        </h1>
        <p className="">We'll help you find your next property and home.</p>
      </div>
      <div className="bg-white text-green-700 px-5 py-3 rounded-full text-sm font-semibold capitalize">
        Contact us today
      </div>
    </div>
  );
}
