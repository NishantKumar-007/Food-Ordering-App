import { IMG_URL } from "../utils/url";
const MenuItem = (props) => {
  const cat = props.menu;
  // console.log(cat);

  return (
    <div>
      {cat.map((item) => {
        const info = item?.card?.info;
        // console.log(info);
        return (
          <div
            id={info.id}
            className="w-7/12 mx-auto text-left my-5 border-b-2 py-7 flex justify-between"
          >
            <div>
              <div className="font-medium">{info.name}</div>
              <div className="text-sm font-semibold py-2">
                {"₹ " + info.price / 100 || "₹ " + info.defaultPrice / 100}
              </div>
              <div className="text-sm w-3/4">{info.description}</div>
            </div>
            <img className="w-36 rounded-md" src={IMG_URL + info.imageId}></img>
          </div>
        );
      })}
    </div>
  );
};
export default MenuItem;
