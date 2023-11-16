import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/url";
import useMenu from "../utils/useMenu";
import Shimmer from "./Shimmer";

const Menu = () => {
  //useParam Hook to retrieve id from the url path "/menu/:id"
  //Destructuring object and reassigning to a new variable name
  const { id: resId } = useParams();

  //use of custom Hook
  const menuinfo = useMenu(resId);
  if (menuinfo === null) return <Shimmer></Shimmer>;
  const menuData =
    menuinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(menuData);

  return (
    // <h1>Hello</h1>
    <div>
      <h1>Menu</h1>
      {menuData.map((dish) => {
        return (
          <div key={dish.card.info.id}>
            <li>
              {dish.card.info.name} - Rs{" "}
              {dish.card.info.price / 100 || dish.card.info.defaultPrice / 100}
            </li>
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
