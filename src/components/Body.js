 import React, { useState, useEffect } from "react";
import { ShimmerUi } from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const {filterRestaurantsList, setFilterRestaurantsList, listOfRestaurants, setListOfRestaurants} = useRestaurantData();

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) 
  return (
   <h1>
     Looks like you are Offline!! please check your internet
   </h1>
  );


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
        <Link to={"/restaurantmenu/" + restaur?.info?.id} key = {restaur?.info?.id}> <RestaurantCard key={restaur?.info?.id} {...restaur?.info} /> </Link>  
        ))}
      </div>
    </div>
  );
};

export default Body;
