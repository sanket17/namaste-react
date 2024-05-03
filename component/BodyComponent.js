import React, { useState, useEffect } from "react";
import { restuarantList } from "../data";
import RestaurantCardComponent from "./RestaurantCardComponent";

const BodyComponent = () => {
  const [resList, setResList] = useState(restuarantList || []);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText === "") {
      setResList(restuarantList);
    }
  }, [searchText]);

  const filterListByName = () => {
    setResList(resList.filter((item) => item.info.name.includes(searchText)));
  };

  return (
    <div className="res-container">
      <div className="search-div">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" onClick={() => filterListByName()}>
          Search
        </button>
      </div>
      <div className="res-list">
        {resList?.map((item) => {
          return (
            <RestaurantCardComponent key={item.info.resId} data={item.info} />
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
