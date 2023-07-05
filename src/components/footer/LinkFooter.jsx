import React from "react";
import { Link } from "react-router-dom";

export default function LinkFooter() {
  return (
    <div className="px-4 lg:px-28 py-8 flex justify-between md:flex-row bg-cyan-950 text-white border-1 border-b border-gray-500">
      <div>
        <div className="py-1">
          <Link to={"/"}>
            <p className="font-semibold text-white text-2xl">
              Rent<span className="font-medium text-green-600">UP</span>
            </p>
          </Link>
        </div>
        <h1 className="text-xl tracking-wider">
          Do You Need Help With Anything?
        </h1>
        <p className="py-2 text-sm text-gray-500">
          Receive Updates, hot deals, discounts sent straight in your inbox
          every month
        </p>
        <div>
          <input
          name="email-box"
            type="email"
            placeholder="Email Address"
            className="p-2 rounded-bl-md rounded-tl-md active:border-none text-gray-800"
          />
          <button
            type="submit"
            className="py-2 px-3 bg-green-700 rounded-br-md rounded-tr-md">
            Subscribe
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-row justify-between gap-6 text-gray-500">
        <div className="p-2 text-center">
          <h2 className="uppercase pb-2 text-white">Layouts</h2>
          <div className="flex flex-col text-sm gap-2">
            <p>Home Page</p>
            <p>About Page</p>
            <p>Service Page</p>
            <p>Property Page</p>
            <p>Contact Page</p>
            <p>Single Blog</p>
          </div>
        </div>
        <div className="p-2 text-center">
          <h2 className="uppercase pb-2 text-white">All Sections</h2>
          <div className="flex flex-col text-sm gap-2">
            <p>Headers</p>
            <p>Features</p>
            <p>Attractive</p>
            <p>Testimonials</p>
            <p>Videos</p>
            <p>Footers</p>
          </div>
        </div>
        <div className="p-2 text-center">
          <h2 className="uppercase pb-2 text-white">Components</h2>
          <div className="flex flex-col text-sm gap-2">
            <p>About</p>
            <p>Blog</p>
            <p>Pricing</p>
            <p>Affiliate</p>
            <p>Login</p>
            <p>Changelog</p>
          </div>
        </div>
      </div>
    </div>
  );
}
