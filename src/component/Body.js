import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

//Body Component
const Body = () => {
  // console.log(restaurantList);
  const [resList, setResList] = useState([]);

  const [copyList, setCopyList] = useState([]);
  useEffect(() => {
    async function getResData() {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.132948980432786&lng=77.57781766355038&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await res.json();
      setResList(
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setCopyList(
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    getResData();
  }, []);
  if (resList.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div>
      <div className="btn">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter((obj) => {
              return obj.info.avgRating > 4;
            });
            setResList(filteredList);
          }}
          ss
        >
          Top Rated Restaurants
        </button>
        <input id="search" type="search" name="search"></input>
        <button
          id="search-button"
          onClick={() => {
            const val = document.getElementById("search").value;
            document.getElementById("search").value = "";
            const searchList = copyList.filter((res) => {
              return res.info.name.toLowerCase().includes(val.toLowerCase());
            });
            setResList(searchList);
          }}
        >
          Search
        </button>
      </div>
      <div></div>
      <div className="card-container">
        {resList.map((obj) => {
          return (
            <RestaurantCard key={obj.info.id} resData={obj}></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
