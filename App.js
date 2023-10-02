import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Assets/logo.png";

//App Layout
// Header Component
const Header = () => {
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
      </div>
    </div>
  );
};

//Card Component
const RestaurantCard = () => {
  return (
    <div className="card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg"></img>
      <h3>Meghana Foods</h3>
      <h4>North Indian, South Indian, Chinese</h4>
      <h4>4.2 stars</h4>
      <h5>38 minutes</h5>
    </div>
  );
};

//Body Component
const Body = () => {
  return (
    <div>
      <div className="search-bar-container">
        <input type="search"></input>
      </div>
      <div className="card-container">
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
