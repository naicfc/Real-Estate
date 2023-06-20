import React from "react";

export default function BannerForm({ placeholder, name }) {
  return (
    <div className="py-3 px-8 border-gray-200 border-r">
      <input type="text" className="p-2 shadow-sm shadow-gray-300 text-gray-600 focus:border-none placeholder:text-gray-700 placeholder:text-sm" name={name} placeholder={placeholder} required/>
    </div>
  );
}
