import { useEffect, useState } from "react";

const useStatus = () => {
  const [onlinestatus, setOnlineStatus] = useState(true);
  //check if online
  //boolean value
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return onlinestatus;
};

export default useStatus;
