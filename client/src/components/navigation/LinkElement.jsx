import { Link } from "react-router-dom";

export default function LinkElement({name,link}) {
  return (
    <Link to={link}>
      <li className="px-2 cursor-pointer">{name}</li>
    </Link>
  );
}
