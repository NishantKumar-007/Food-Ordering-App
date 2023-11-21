import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { useState } from "react";
import useStatus from "../utils/useStatus";
// Header Component
const Header = () => {
  const [logStatus, setLogStatus] = useState("Login");
  const onlineStatus = useStatus();
  return (
    <div className="flex justify-between bg-gradient-to-r from-white to-cream">
      <div>
        <img className="logo w-32" src={logo}></img>
      </div>
      <div className="nav-items flex self-center mr-10 gap-5 font-montserrat font-bold text-xl ">
        <ul className="flex gap-5">
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="transition-all hover:-translate-y-1 hover:scale-110 duration-200">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="transition-all hover:-translate-y-1 hover:scale-110 duration-200">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="transition-all hover:-translate-y-1 hover:scale-110 duration-200">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="transition-all hover:-translate-y-1 hover:scale-110 duration-200">
            Cart
          </li>
        </ul>
        <button
          className="log transition-all hover:-translate-y-1 hover:scale-110 duration-200"
          onClick={() => {
            logStatus == "Login"
              ? setLogStatus("Logout")
              : setLogStatus("Login");
          }}
        >
          {logStatus}
        </button>
      </div>
    </div>
  );
};

export default Header;
