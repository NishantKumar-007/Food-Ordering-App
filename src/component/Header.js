import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { useState } from "react";
import useStatus from "../utils/useStatus";
// Header Component
const Header = () => {
  const [logStatus, setLogStatus] = useState("Login");
  const onlineStatus = useStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="log"
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
