import { useEffect, useState } from "react";
import { MENU_URL } from "./url";
const useMenu = (resId) => {
  const [resinfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const menu = await fetch(MENU_URL + resId);

    const jsonData = await menu.json();
    // console.log(jsonData.data);
    setResInfo(jsonData?.data);
  };
  return resinfo;
};
export default useMenu;
