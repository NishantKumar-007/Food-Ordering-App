import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/url";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  //useParam Hook to retrieve id from the url path "/menu/:id"
  //Destructuring object and reassigning to a new variable name
  const { id: resId } = useParams();
  console.log(typeof resId);

  //useState Hook to set menuData everytime menu api is called for different restaurants.

  //calling the menu api
  useEffect(() => {
    async function fetchMenu() {
      const menu = await fetch(MENU_URL + resId);

      const jsonData = await menu.json();
      console.log(jsonData);
      setMenuData(
        jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
          ?.card?.card?.itemCards
      );
    }
    fetchMenu();
  }, []);

  //   console.log(menuData[0].card.info.name);
  return (
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
