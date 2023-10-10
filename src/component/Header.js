import logo from "../../Assets/logo.png";
import { useState } from "react";
// Header Component
const Header = () => {
  const [logStatus, setLogStatus] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
