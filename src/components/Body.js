 import React, { useState, useEffect } from "react";
import { ShimmerUi } from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [filterRestaurantsList, setFilterRestaurantsList] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

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

  return listOfRestaurants.length===0 ?(
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="search-container">
        <div className="serach">
          <input
            type="text"
            className="search-box"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((resta) => {
                return resta?.info?.name.toLowerCase().includes(searchTxt);
              });
              setFilterRestaurantsList(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="resturant-container">
        {filterRestaurantsList.map((restaur) => (
        <Link to={"/restaurantmenu/" + restaur.info?.id}> <RestaurantCard key={restaur.info?.id} {...restaur?.info} /> </Link>  
        ))}
      </div>
    </div>
  );
};

export default Body;
