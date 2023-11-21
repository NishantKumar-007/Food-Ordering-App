import { IMG_URL } from "../utils/url";
//Card Component
const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    sla: time,
    cloudinaryImageId,
  } = props.resData.info;
  const cuisine = cuisines.join(", ");
  return (
    <div className="card-details bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 w-72 mb-10 text-white font-montserrat transition-all duration-700 hover:scale-110 hover:shadow-md hover:shadow-ochreYellow border-opacity-0">
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

export default RestaurantCard;
