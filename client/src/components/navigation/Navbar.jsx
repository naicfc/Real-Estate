import React from "react";
import LinkElement from "./LinkElement";
import SignInButton from "./SignInButton";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed w-full flex justify-between items-center px-28 py-2 text-gray-600 shadow-sm bg-zinc-100">
      <div>
        <Link to={"/"}>
          <p className="font-semibold text-gray-700 text-2xl">
            Rent<span className="font-medium text-green-600">UP</span>
          </p>
        </Link>
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-2">
          <LinkElement name={"Home"} link={"/"} />
          <LinkElement name={"About"} link={"/about"} />
          <LinkElement name={"Services"} link={"/services"} />
          <LinkElement name={"Blog"} link={"/blogs"} />
          <LinkElement name={"Pricing"} link={"/pricing"} />
          <LinkElement name={"Contact"} link={"/services"} />
        </ul>
      </nav>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <p className="rounded-full bg-green-600 px-1 py-0 text-sm text-white">2</p>
          <p className="px-1 mr-2">My List</p>
        </div>
        <SignInButton />
      </div>
    </div>
  );
}
