import { IMG_URL } from "../utils/url";
//Card Component
const RestaurantCard = (props) => {
  // console.log(props.offers);
  const {
    name,
    cuisines,
    avgRating,
    sla: time,
    cloudinaryImageId,
  } = props.resData.info;
  const cuisine = cuisines.join(", ");
  const cardStyle = props.offers
    ? ""
    : "bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 w-72 mb-10 text-white font-montserrat transition-all duration-100 hover:scale-95 hover:shadow-md hover:shadow-ochreYellow border-opacity-0";
  return (
    <div className={`card-details ${cardStyle}`}>
      <img
        className="rounded-t-lg w-full h-60 object-cover"
        src={IMG_URL + cloudinaryImageId}
      ></img>
      <h3 className="truncate my-3 mx-2 font-extrabold text">{name}</h3>
      <h4 className="truncate my-3 mx-2 text-sm">{cuisine}</h4>
      <h4 className="truncate my-3 mx-2 text-sm">{avgRating}</h4>
      <h5 className="truncate my-3 mx-2 text-sm">{time.deliveryTime} min</h5>
    </div>
  );
};

export const promotedRestaurant = (RestaurantCard) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props.resData.info;
    console.log(aggregatedDiscountInfoV3);
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 w-72 mb-10 text-white font-montserrat transition-all duration-100 hover:scale-95 hover:shadow-md hover:shadow-ochreYellow border-opacity-0">
        <label className="absolute p-2 bg-black text-white rounded-lg shadow-lg  font-montserrat opacity-75 z-10">
          {aggregatedDiscountInfoV3.header + " "}
          {aggregatedDiscountInfoV3.subHeader}
        </label>
        {/* <label className="absolute">{aggregatedDiscountInfoV3.subHeader}</label> */}
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};

export default RestaurantCard;
