import React from "react";
import { useDispatch } from "react-redux";
import { MENU_IMAGE } from "../../Utils/constant";
import VegIcon from "../../style/images/icon-veg.png";
import NonVegIcon from "../../style/images/icon-non-veg.png";
import DownArrow from "../../style/images/down-arrow.png";
import RightArrow from "../../style/images/right.png";

import { addItem } from "../../Store/CartSlice";

export default function MenuList({ listData, isOpen, setOpenIndex }) {
  const { title, itemCards } = listData?.card?.card;

  const dispatch = useDispatch();

  const handleAddItem = (menuItem) => {
    dispatch(addItem(menuItem));
  };

  return (
    <div id="menu-container">
      <div>
        <summary
          className="border-css mt-10 py-5 pl-4 flex flex-wrap justify-between"
          onClick={() => setOpenIndex()}>
          <span>
            {title} | ({itemCards?.length})
          </span>
          <span>
            <img
              className="w-[25px] h-[25px] mr-3"
              src={isOpen ? DownArrow : RightArrow}
              alt="Down Arrow"
            />
          </span>
        </summary>
        {isOpen && (
          <ul id="menu-list">
            {itemCards?.map((item) => {
              const menuData = item.card.info;
              return (
                <li data-cy="menuItem" data-testid="menuItem" key={menuData.id}>
                  <div id="menu-card" className="border-css">
                    <div id="menu-detail" className="px-4 pt-4">
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
                    <div id="menu-image" className="p-4">
                      <img
                        src={`${MENU_IMAGE}${menuData.imageId}`}
                        alt={menuData.name}
                      />
                      <button
                        data-cy="addItemButton"
                        onClick={() => handleAddItem(menuData)}>
                        Add
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
