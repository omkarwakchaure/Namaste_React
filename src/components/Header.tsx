import { useState } from "react";
import { LOGO_URL } from "../utils/urls";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isbutton, setIsButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex h-24 justify-between bg-pink-100 shadow-lg">
      <div>
        <img className="w-32 h-24" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4">
          <h1>Online Status: {onlineStatus ? "✔" : "🔴"}</h1>
        </li>
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <Link to="/about">About</Link>
        </li>
        <li className="px-4">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-4">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-4">Cart</li>
        <button
        className="px-4"
          type="button"
          onClick={() => {
            isbutton === "Login" ? setIsButton("Logout") : setIsButton("Login");
          }}
        >
          {isbutton}
        </button>
      </ul>
      </div>
    </div>
  );
};

export default Header;
