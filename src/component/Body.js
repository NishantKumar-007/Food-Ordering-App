import { Link } from "react-router-dom";
import RestaurantCard, { promotedRestaurant } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useStatus from "../utils/useStatus";

//Body Component
const Body = () => {
  // console.log(restaurantList);
  const [resList, setResList] = useState([]);

  const [copyList, setCopyList] = useState([]);

  const PromotedRestaurantComponent = promotedRestaurant(RestaurantCard);
  useEffect(() => {
    async function getResData() {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.132948980432786&lng=77.57781766355038&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await res.json();
      console.log(data);
      setResList(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setCopyList(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    getResData();
  }, []);

  const status = useStatus();

  if (status === false)
    return <h1>You are Offline. Check your internet connection</h1>;

  if (resList.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div>
      <div className="justify-between flex mx-14 my-8">
        <button
          className="filter-btn bg-slate-700  text-white rounded-md p-3 font-montserrat font-semibold"
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
        <div className="self-center">
          <input
            className="border-2 border-gray-300 mr-4 p-3 rounded-md"
            id="search"
            type="search"
            name="search"
          ></input>
          <button
            className="bg-slate-700  text-white rounded-md p-3 font-montserrat font-semibold"
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
      </div>
      <div></div>
      <div className="card-container flex flex-wrap justify-evenly shadow-md">
        {resList.map((obj) => {
          console.log(obj);
          return (
            <Link
              className="card"
              key={obj.info.id}
              to={"/menu/" + obj.info.id}
            >
              {obj?.info?.aggregatedDiscountInfoV3?.header === undefined ? (
                <RestaurantCard resData={obj} offers={false}></RestaurantCard>
              ) : (
                <PromotedRestaurantComponent
                  resData={obj}
                  offers={true}
                ></PromotedRestaurantComponent>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
