import resList from '../utils/mockData.js';
import RestaurantCard from './RestaurantCard.js';
import { useState } from 'react';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="toprated-res-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.rating.aggregate_rating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resObj) => (
          <RestaurantCard key={resObj.info.resId} resData={resObj} />
        ))}
      </div>
    </div>
  );
};
export default Body;
