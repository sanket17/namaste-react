import React from 'react';

const RestaurantCardComponent = (props) => {
  const { name, image, rating, cft, cuisine } = props.data;
  return (
    <div className="card">
      <img className="card-image" src={image.url} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisine.map((item) => item.name).join(', ')}</h4>
      <h4>{rating.rating_text} stars</h4>
      <h4>{cft.text}</h4>
    </div>
  );
};

export default RestaurantCardComponent;
