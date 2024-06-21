import React, { useState, useEffect } from "react";
import RestaurantCardComponent from "./RestaurantCardComponent";
import ShimmerComponent from "./ShimmerComponent";
import { GET_RESTAURANT_LIST } from "../Utils/constant";
import useDebounce from "../Utils/useDebounce";
import withPromtedRestaurantCard from "./Restaurant/PromotedRestaurantCard";

const BodyComponent = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const PromtotedRestaurantCard = withPromtedRestaurantCard(
    RestaurantCardComponent,
  );

  const fetchData = async () => {
    const data = await fetch(GET_RESTAURANT_LIST, {
      headers: {
        "x-cors-api-key": "temp_9dd644fdd02b5a777748a1165f54bbcf",
      },
    });

    const jsonData = await data.json();
    // console.log(
    //   jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants,
    // );
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
    <div className="flex flex-wrap flex-col mx-auto my-4 p-4 w-10/12">
      <div className="search-div">
        <input
          type="text"
          name="searchText"
          data-testid="searchInput"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            getDebounceEffect(e.target.value);
          }}
          className="border border-black rounded-lg font-black"
        />
        <button
          type="submit"
          className="mx-2 bg-green-500 text-white rounded-lg p-1"
          onClick={() => filterListByName(searchText)}>
          Search
        </button>
      </div>
      <div className="res-list">
        {filteredList && filteredList.length === 0 ? (
          <>
            <ShimmerComponent />
          </>
        ) : (
          filteredList?.map((item) => {
            return item.info.avgRating > 4.0 ? (
              <PromtotedRestaurantCard key={item.info.id} data={item.info} />
            ) : (
              <RestaurantCardComponent key={item.info.id} data={item.info} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
