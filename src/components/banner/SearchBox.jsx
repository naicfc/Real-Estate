import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
  return (
    <div className="py-3 px-5 border-gray-200 border-r ">
      <div className="flex items-center justify-center h-full">
        <p className="p-2 text-gray-700 block">Advanced Filter</p>
        <button className="p-2 block bg-green-600 rounded-sm">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
