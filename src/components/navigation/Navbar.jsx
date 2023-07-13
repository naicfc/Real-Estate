import React, { useState } from "react";
import LinkElement from "./LinkElement";
import SignInButton from "./SignInButton";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full flex justify-between items-center px-4 lg:px-28 py-4 md:py-2 text-gray-600 shadow-md bg-white">
      <div className="lg:w-[190px]">
        <Link to={"/"}>
          <p className="font-semibold text-gray-700 text-2xl">
            Rent<span className="font-medium text-green-600">UP</span>
          </p>
        </Link>
      </div>
      <nav className="hidden md:inline">
        <ul className="flex justify-center items-center gap-2">
          <LinkElement name={"Home"} link={"/"} />
          <LinkElement name={"About"} link={"/about"} />
          <LinkElement name={"Services"} link={"/services"} />
          <LinkElement name={"Blog"} link={"/blogs"} />
          <LinkElement name={"Pricing"} link={"/pricing"} />
          <LinkElement name={"Contact"} link={"/contact"} />
        </ul>
      </nav>
      <div
        className={
          nav
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70 ease-in duration-500"
            : "md:hidden bg-transparent ease-out duration-1000"
        }>
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[50%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-out duration-500"
              : "fixed right-[-100%] w-[75%] sm:w-[50%] md:w-[45%] w top-0 p-10 duration-500 h-screen"
          }>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link to={"/"}>
                <p className="font-semibold text-gray-700 text-2xl">
                  Rent<span className="font-medium text-green-600">UP</span>
                </p>
              </Link>
              <div onClick={handleNav} className="rounded-full cursor-pointer">
                <AiOutlineClose size={18} />
              </div>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link to="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link to="/services">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  services
                </li>
              </Link>
              <Link to="/blogs">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Blogs
                </li>
              </Link>
              <Link to="/pricing">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Pricing
                </li>
              </Link>
              <Link to="/contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
              <Link>
                <div className="flex items-center pt-4 pb-8">
                  <p className="rounded-full bg-green-600 px-1 py-0 text-sm text-white">
                    2
                  </p>
                  <p className="px-1 mr-2">My List</p>
                </div>
              </Link>
              <Link>
                <SignInButton className=""/>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <div className="flex justify-center items-center">
          <p className="rounded-full bg-green-600 px-1 py-0 text-sm text-white">
            2
          </p>
          <p className="px-1 mr-2">My List</p>
        </div>
        <SignInButton />
      </div>

      <div onClick={handleNav} className=" md:hidden cursor-pointer">
        <AiOutlineMenu size={25} className="text-gray-700" />
      </div>
    </div>
  );
}
