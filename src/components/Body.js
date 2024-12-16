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
      <div className="filter flex">
        <div className="search mx-8 mt-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black mx-12"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn px-2 py-0.5 bg-blue-200 m-4 rounded-md mx-[-35px] "
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
        <div className="px-1 py-0.5 my-12 mx-12 font-bold ">Filters :</div>
        <div>
          <button
            className="px-1 py-0.5 my-12 mx-[-30px] bg-gray-200 items-center rounded-md"
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
      </div>
      <div className="flex flex-wrap mx-2 px-12">
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
