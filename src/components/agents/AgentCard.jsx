import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

export default function AgentCard({ user }) {
  return (
    <div className="shadow-sm shadow-gray-300 p-4 flex flex-col gap-4 bg-zinc-100">
      <div className="">
        <p className="text-xs text-white bg-orange-500 px-3 py-1 rounded-full w-[30%]">
          78 Listings
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="p-1 rounded-full border border-gray-600">
          <img
            src={user.image}
            alt="agent"
            width={100}
            className="border border-gray-600 rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
        <ImLocation />
        <p>
          {user.address.city}, {user.address.state}
        </p>
      </div>
      <div className="text-center text-gray-600">
        <p>
          {user.firstName} {user.lastName}
        </p>
      </div>
      <div className="flex justify-center gap-4 text-gray-600">
        <FaFacebookF />
        <FaLinkedinIn />
        <FaTwitter />
        <FaInstagram />
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-green-600 flex gap-2 items-center px-3 py-2 rounded-sm">
          <AiOutlineMail className="text-white inline" />
          <p className="text-white inline">Message</p>
        </div>
        <div className="bg-black p-3 rounded-sm">
          <FaPhone className="text-white" />
        </div>
      </div>
    </div>
  );
}
