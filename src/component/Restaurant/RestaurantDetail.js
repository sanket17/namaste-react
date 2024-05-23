import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetailShimmer from "./RestaurantDetailShimmer";
import { GET_RESTAURANT_DETAIL, MENU_IMAGE } from "../../Utils/constant";
import VegIcon from "../../style/images/icon-veg.png";
import NonVegIcon from "../../style/images/icon-non-veg.png";

export default function RestaurantDetail() {
  const params = useParams();
  const [resDetail, setResDetail] = useState(null);
  const [menuList, setMenuList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseData = await fetch(`${GET_RESTAURANT_DETAIL}${params.resId}`);
    const data = await responseData.json();
    setResDetail(data?.data?.cards[2]?.card?.card?.info);
    setMenuList(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards,
    );
  };

  return resDetail === null && menuList === null ? (
    <RestaurantDetailShimmer />
  ) : (
    <div id="res-detail-container">
      <h1>{resDetail?.name}</h1>
      <div id="restaurant-detail-card" className="border-css">
        <div>
          {resDetail?.avgRating} - {resDetail?.costForTwoMessage}
        </div>
        <div>{resDetail?.cuisines?.join(" ,")}</div>
        <div>
          {resDetail?.locality}, {resDetail?.areaName}, {resDetail?.city}
        </div>
      </div>

      <h3 className="menu-title">Menu</h3>
      <div id="menu-container">
        <details open>
          <summary className="border-css">
            Recommended <span>({menuList?.length})</span>
          </summary>
          <ul id="menu-list">
            {menuList?.map((item) => {
              let menuData = item.card.info;
              return (
                <li key={menuData.id}>
                  <div id="menu-card" className="border-css">
                    <div id="menu-detail">
                      <img
                        src={menuData.isVeg ? VegIcon : NonVegIcon}
                        alt="veg-or-non-veg"
                      />
                      <div>{menuData.name}</div>
                      <div>
                        <span>&#8377;</span>
                        {(menuData.defaultPrice || menuData.price) / 100}
                      </div>
                      <div>{menuData.ratings.aggregatedRating.rating}</div>
                    </div>
                    <div id="menu-image">
                      <img
                        src={`${MENU_IMAGE}${menuData.imageId}`}
                        alt={menuData.name}
                      />
                      <button>Add</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </details>
      </div>
    </div>
  );
}
