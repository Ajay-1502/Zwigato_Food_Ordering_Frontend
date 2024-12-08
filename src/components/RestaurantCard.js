const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, image, rating, cfo } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img className="res-logo" alt="restaurant image" src={image.url} />
      <h3>{name}</h3>
      <h4>{cuisine.map((cuisineObj) => cuisineObj.name).join(' , ')}</h4>
      <h4>{rating.aggregate_rating + ' '} stars</h4>
      <h4>{cfo.text}</h4>
      <h4>{resData.order.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
