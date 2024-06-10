import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetailShimmer from "./RestaurantDetailShimmer";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";
import MenuList from "./MenuList";
import CityContext from "../../Utils/CityContext";

export default function RestaurantDetail() {
  const params = useParams();
  const { resDetail, menuList } = useRestaurantMenu(params.resId);
  const [openIndex, setOpenIndex] = useState(0);
  const { cityName } = useContext(CityContext);

  return resDetail === null && menuList === null ? (
    <RestaurantDetailShimmer />
  ) : (
    <div id="res-detail-container" className="my-4 w-6/12 items-center mx-auto">
      <h1 className="font-bold  text-center">{resDetail?.name}</h1>
      <div id="restaurant-detail-card" className="border-css my-4 py-4">
        <div className="text-center">
          {resDetail?.avgRating} - {resDetail?.costForTwoMessage}
        </div>
        <div className="text-center">{resDetail?.cuisines?.join(" ,")}</div>
        <div className="text-center">
          {resDetail?.locality}, {resDetail?.areaName}, {cityName}
        </div>
      </div>

      <h3 className="font-bold text-center my-5">Menu</h3>
      {menuList.map((item, index) => {
        return (
          <div key={item?.card?.card?.title}>
            <MenuList
              listData={item}
              isOpen={openIndex === index ? true : false}
              setOpenIndex={() => setOpenIndex(index)}
            />
          </div>
        );
      })}
    </div>
  );
}
