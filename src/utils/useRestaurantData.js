import { useState, useEffect } from 'react';

const useRestaurantData = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //
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
  };

  return {
    listOfRestaurants,
    setListOfRestaurants,
    filteredRes,
    setFilteredRes,
    searchText,
    setSearchText,
  };
};

export default useRestaurantData;
