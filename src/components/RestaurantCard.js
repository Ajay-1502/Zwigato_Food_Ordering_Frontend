const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, image, rating, cfo } = resData?.info;
  return (
    <div className=" mx-6 my-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:-translate-y-2 hover:shadow-lg transition-transform duration-300 ease-in-out">
      <img
        className="res-logo w-auto h-40 mx-auto rounded-lg"
        alt="restaurant image"
        src={image.url}
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>

      <h4 className="font-semibold py-1">
        {cuisine.map((cuisineObj) => cuisineObj.name).join(' , ')}
      </h4>
      <h4 className="font-semibold py-1">
        {rating.aggregate_rating + ' '} stars
      </h4>
      <h4 className="font-semibold py-1">{cfo.text}</h4>
      <h4 className="font-semibold py-1">
        {resData.order.deliveryTime ? resData.order.deliveryTime : '30min'}
      </h4>
    </div>
  );
};

//Higher Order Component

//Input -> RestaurantCard & Output => RestaurantCard With-Promoted-Label

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="relative top-2 left-7 rounded-md bg-black text-white text-xs px-2 py-1 ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
