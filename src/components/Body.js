import RestaurantCard from './RestaurantCard.js';
//import { useState, useEffect } from 'react';
import Shimmer from './ShimmerUI.js';
import { Link } from 'react-router-dom';
import useRestaurantData from '../utils/useRestaurantData.js';

const Body = () => {
  /* const [listOfRestaurants, setListOfRestaurants] = useState([]); //
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState('');

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
    setFilteredRes(resInfo);
  };*/

  const {
    listOfRestaurants,
    setListOfRestaurants,
    filteredRes,
    setFilteredRes,
    searchText,
    setSearchText,
  } = useRestaurantData();

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRes.map((restaurant) => (
          <Link
            to={'/restaurants/' + restaurant.info.resId}
            key={restaurant.info.resId}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
