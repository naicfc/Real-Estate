import React from "react";

export default function PricingCard({
  bestValue,
  packageName,
  subscription,
  price,
  check1,
  check2,
  check3,
  check4,
  check5,
  cross1,
  cross2,
  cross3
}) {
  return (
    <div className="py-6 px-12 shadow-md shadow-gray-300 flex flex-col gap-3  items-center">
      <div
        className={
          bestValue
            ? "bg-orange-500 px-2 py-1 text-white text-xs w-[40%] rounded-full text-center"
            : "hidden"
        }>
        Best Value
      </div>
      <p className="font-semibold text-gray-700">{packageName}</p>
      <div className="text-center">
        <p className="font-semibold text-3xl text-gray-700">{price}</p>
        <p className="text-xs">{subscription}</p>
      </div>
      <div className="text-left w-full flex flex-col gap-3 text-gray-600">
        {check1}
        {check2}
        {check3}
        {check4}
        {check5}
        {cross1}
        {cross2}
        {cross3}
      </div>
      <button
        className={
          bestValue
            ? "shadow-sm shadow-gray-300 border-green-700 border rounded-full text-sm px-8 py-2 bg-green-700 text-white w-[80%]"
            : "shadow-sm shadow-gray-300 border-green-700 border rounded-full text-sm px-8 py-2 text-green-700  w-[80%]"
        }>
        Start {packageName}
      </button>
    </div>
  );
}
