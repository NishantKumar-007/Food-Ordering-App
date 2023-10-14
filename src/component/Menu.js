import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      const menu = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.132948980432786&lng=77.57781766355038&restaurantId=" +
          resId
      );

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
      {menuData.map((dish) => {
        return (
          <div>
            <p>
              {dish.card.info.name} Rs {dish.card.info.price / 100}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
