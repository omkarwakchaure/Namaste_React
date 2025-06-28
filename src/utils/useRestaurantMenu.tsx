import { useEffect, useState } from "react";
import { Restaurant } from "../type/Type";
import { MENU_URL } from "./urls";

const useRestaurantMenu = (resId: string) => {
  const [resInfo, setResInfo] = useState<Restaurant["info"] | null>(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  // console.log(resInfo);
  return resInfo;
};

export default useRestaurantMenu;
