import { restaurantList } from "../utils/constant";
import ResturantCard from "./RestaurantCard";
import { useState } from "react";

const Body =()=> {
      
    const [restaurants , setrestaurants] = useState(restaurantList);

    
    return (
       <div className="body">
          <div className="filter"> 

            <button className="filter-btn" 
             onClick={()=> {
                const filteredList = restaurants.filter((rests) => {
                  rests?.info?.avgRating > 3.4;
                });
                setrestaurants(filteredList);
                
            }}
            >
                Search by raitng above 4
            </button>

          </div>


          <div className="resturant-container">
             
             {
                restaurants.map((restaur) => ( 
                <ResturantCard key ={restaur.info?.id} restaurants = {restaur}/>))
             }
 
             <ResturantCard restaurants = {restaurantList[0]}/>
          
          </div>
       </div>
    )
 }


 export default Body;
 