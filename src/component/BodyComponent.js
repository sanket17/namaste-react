import React, { useState, useEffect } from "react";
import RestaurantCardComponent from "./RestaurantCardComponent";
import ShimmerComponent from "./ShimmerComponent";

const BodyComponent = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

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

  const debounceFunction = (fnc, delay) => {
    let timeout;
    return function (...args) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(fnc(...args), delay);
    };
  };

  const getDebounceEffect = debounceFunction(filterListByName, 500);

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
