import React from "react";

const RestaurantCardComponent = (props) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines } =
    props.data;
  return (
    <div className="card">
      <img
        className="card-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCardComponent;