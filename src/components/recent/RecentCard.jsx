import { AiOutlineHeart } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

export default function RecentCard({
  url,
  status,
  name,
  location,
  price,
  type,
}) {
  return (
    <div className="flex flex-col shadow-gray-300 shadow-sm rounded-sm">
      <img className="w-[100%] h-[30vh]" src={url} alt="Recent properties" />
      <div className="p-4">
        <div className="flex justify-between items-center py-1">
          <p className="py-1 px-2 bg-green-600/40 rounded-sm text-green-700 text-sm cursor-default">
            {status}
          </p>
          <AiOutlineHeart />
        </div>
        <div className="py-4">
          <p className="py-1 text-gray-700 font-semibold">{name}</p>
          <div className="flex items-center py-1 text-sm text-gray-600">
            <ImLocation className="mr-1" />
            <p>{location}</p>
          </div>
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center">
            <p className="py-2 px-4 bg-green-600 rounded-full text-white font-semibold">
              {price}
            </p>
            <p className="text-xs font-semibold text-gray-500 px-2"> per year</p>
          </div>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
}
