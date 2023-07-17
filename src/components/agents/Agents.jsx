import React from "react";
import { useEffect, useState } from "react";
import AgentCard from "./AgentCard";

export default function Agents() {
  const [userslist, setUsers] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://dummyjson.com/users?skip=5&limit=6"
      );
      const json = await response.json();
      setUsers(json);
    };

    fetchUsers();
  }, []);

  return (
    <div className=" px-4 lg:px-28 py-16">
      <div className="text-center mb-10">
        <p className="text-xl mb-2 tracking-wider text-gray-800 font-semibold capitalize">
          our feature agents
        </p>
        <p className="text-sm text-gray-600 font-medium w-full md:w-[70%] mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          asperiores praesentium mollitia ipsam similique consectetur veniam
          doloribus voluptas commodi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {userslist.users &&
          userslist.users.map((user) => (
            <AgentCard key={user.id} user={user} />
          ))}
      </div>
    </div>
  );
}
