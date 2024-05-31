import { useState, useEffect } from "react";
import { GET_RESTAURANT_DETAIL } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resDetail, setResDetail] = useState(null);
  const [menuList, setMenuList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseData = await fetch(`${GET_RESTAURANT_DETAIL}${resId}`);
    const data = await responseData.json();
    setResDetail(data?.data?.cards[2]?.card?.card?.info);
    setMenuList(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards,
    );
  };
  return { resDetail: resDetail, menuList: menuList };
};

export default useRestaurantMenu;
