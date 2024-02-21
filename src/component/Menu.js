import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/url";
import useMenu from "../utils/useMenu";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";

const Menu = () => {
  //useParam Hook to retrieve id from the url path "/menu/:id"
  //Destructuring object and reassigning to a new variable name
  const { id: resId } = useParams();

  //use of custom Hook
  const menuinfo = useMenu(resId);
  if (menuinfo === null) return <Shimmer></Shimmer>;
  // console.log(menuinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const categories =
    menuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) => {
        return (
          cat?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log(categories);
  const menuData =
    menuinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  //console.log(menuData);

  return (
    // <h1>Hello</h1>
    <div className="text-center">
      <h1 className="text-2xl m-8 font-bold">Menu</h1>
      {categories.map((category) => {
        console.log(category.card.card.itemCards.length);
        return (
          <span>
            <div className="flex w-7/12 m-auto justify-between  border-b-8 text-left mt-20">
              <div className="text-xl font-bold">
                {category?.card?.card?.title}
                {" (" + category.card.card.itemCards.length + ")"}
              </div>
              <div>▼</div>
            </div>
            <MenuItem menu={category?.card?.card?.itemCards}></MenuItem>
          </span>
        );
      })}
    </div>
  );
};
export default Menu;
