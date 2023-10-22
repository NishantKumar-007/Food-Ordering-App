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
    <div className="card-details">
      <img src={IMG_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{avgRating}</h4>
      <h5>{time.deliveryTime} min</h5>
    </div>
  );
};

export default RestaurantCard;
