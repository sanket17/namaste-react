import { useState, useEffect } from "react";
import { GET_RESTAURANT_DETAIL } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resDetail, setResDetail] = useState(null);
  const [menuList, setMenuList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseData = await fetch(`${GET_RESTAURANT_DETAIL}${resId}`, {
      headers: {
        "x-cors-api-key": "temp_9dd644fdd02b5a777748a1165f54bbcf",
      },
    });
    const data = await responseData.json();
    setResDetail(data?.data?.cards[2]?.card?.card?.info);
    const listData =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      );
    setMenuList(listData);
  };
  return { resDetail: resDetail, menuList: menuList };
};

export default useRestaurantMenu;
