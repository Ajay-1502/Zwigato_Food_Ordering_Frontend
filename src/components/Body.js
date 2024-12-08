import RestaurantCard from './RestaurantCard.js';
import { useState, useEffect } from 'react';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://raw.githubusercontent.com/Ajay-1502/Mock-Apis/refs/heads/main/restaurantsData.json'
    );

    const json = await data.json();
    const resInfo = json?.sections?.SECTION_SEARCH_RESULT;
    setListOfRestaurants(resInfo);
  };

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
          4 Star+ Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
