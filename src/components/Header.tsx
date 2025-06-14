import { useState } from "react";
import { LOGO_URL } from "../utils/urls";

const Header = () => {
  const [isbutton,setIsButton] = useState("Login");
  return (
    <div className="flex justify-between items-center w-full p-2 border border-black-200">
      <div className="w-20">
        <img className="w-full" src={LOGO_URL} alt="Logo" />
      </div>
      <ul className="flex gap-6">
        <li className="p-4">Home</li>
        <li className="p-4">About Us</li>
        <li className="p-4">Contact Us</li>
        <li className="p-4">Cart</li>
        <button type="button" onClick={()=>{isbutton === "Login" ? setIsButton("Logout") : setIsButton("Login")}}>{isbutton}</button>
      </ul>
    </div>
  );
};

export default Header;
