import { useState, useEffect } from 'react';

const useRestaurantData = () => {
  const [filterRestaurantsList, setFilterRestaurantsList] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const restaurantsJSON = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(restaurantsJSON);
      setFilterRestaurantsList(restaurantsJSON);
    } catch (error) {
      console.error('Error agaya bhai shi se check kr api link', error);
    }
  };


  return {
    filterRestaurantsList,
    listOfRestaurants
  };
};

export default useRestaurantData;
