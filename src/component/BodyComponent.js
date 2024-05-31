import React, { useState, useEffect } from "react";
import RestaurantCardComponent from "./RestaurantCardComponent";
import ShimmerComponent from "./ShimmerComponent";
import { GET_RESTAURANT_LIST } from "../Utils/constant";
import useDebounce from "../Utils/useDebounce";

const BodyComponent = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GET_RESTAURANT_LIST);

    const jsonData = await data.json();
    console.log(
      jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setResList(
      jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredList(
      jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const filterListByName = (text) => {
    setFilteredList([
      ...resList.filter((item) =>
        item.info.name.toLowerCase().includes(text.toLowerCase()),
      ),
    ]);
  };

  const getDebounceEffect = useDebounce(filterListByName);

  return (
    <div className="res-container">
      <div className="search-div">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            getDebounceEffect(e.target.value);
          }}
          // onKeyUp={(e) => {
          //   getDebounceEffect(e.target.value);
          // }}
        />
        <button type="submit" onClick={() => filterListByName()}>
          Search
        </button>
      </div>
      <div className="res-list">
        {filteredList.length === 0 ? (
          <>
            <ShimmerComponent />
          </>
        ) : (
          filteredList?.map((item) => {
            return (
              <RestaurantCardComponent key={item.info.id} data={item.info} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
