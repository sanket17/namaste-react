const withPromtedRestaurantCard = (CardComponent) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-700 text-white p-2 m-1 rounded-lg">
          Top Rated
        </label>
        <CardComponent {...props} />
      </div>
    );
  };
};

export default withPromtedRestaurantCard;
