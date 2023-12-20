 import React, { useState, useEffect } from "react";
import { ShimmerUi } from "./Shimmer";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const {filterRestaurantsList, setFilterRestaurantsList, listOfRestaurants, setListOfRestaurants} = useRestaurantData();

  const RestaurantOpen = withOpenLabel(RestaurantCard)

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
     
      <div className=" flex justify-center">
        <div className="serach m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-md"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />

          <button className="px-4 py-2 bg-green-100 mx-4 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((resta) => {
                return resta?.info?.name.toLowerCase().includes(searchTxt);
              });
              setFilterRestaurantsList(filteredList);
            }}>
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {filterRestaurantsList.map((restaur) => (
          
        <Link to={"/restaurantmenu/" + restaur?.info?.id} 
              key = {restaur?.info?.id}>

          {restaur.info?.aggregatedDiscountInfoV3===0 ? (
             <RestaurantCard {...restaur?.info} />
          ):<RestaurantOpen  {...restaur?.info}/>} 

          
         
          
          </Link>  
          


        ))}
      </div>
    </div>
  );
};

export default Body;
