import ResturantCard from "./RestaurantCard";
import {useState, useEffect } from "react";
import { ShimmerUi } from "./Shimmer";


const Body =()=> {  
      
   
   //filttered list or filler button state variable
   const [filterRestaurantsList , setfilterRestaurantsList] = useState([]);
   //list of restaurant state variable 
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   //search text use state variable
   const [serachTxt , setSearchTxt] = useState("");


   useEffect(()=>{
      getData();
    }, []);

     const  getData = async () => {
      try
        {

         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING")
         const json =  await data.json();
         setListOfRestaurants(json ?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setfilterRestaurantsList(json ?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         
           
         } 
         catch(error) {
            console.error('Error agaya bhai shi se check kr api link',);
         }
       
   };
   
   return  listOfRestaurants.length === 0 ? <ShimmerUi /> : (
      <div className="body">
         
          
         <div className="search-container">
            
            <div className="serach">

               <input type="text" className="search-box" value={serachTxt} onChange={(e)=>{
                     setSearchTxt(e.target.value);
               }}></input>
               
               <button onClick={()=>{
                   
                  const filteredList =  listOfRestaurants.filter((resta)=>{
                  return resta?.info?.name.toLowerCase().includes(serachTxt);   
               });
               setfilterRestaurantsList(filteredList); //////// setfilterre

               }}>search</button>
            
            </div>

            <button className="filter-btn" 
               onClick={() => {
               const filteredList = listOfRestaurants.filter((rests) => {
               return rests.data?.info?.avgRating > 3.4;
               });
               setListOfRestaurants(filteredList);
               }}
               >
               Search by rating above 4
            </button>
         
         </div>   

         


            <div className="resturant-container">
             
            {
               filterRestaurantsList.map((restaur) => {
               return (
               <ResturantCard key ={restaur.info?.id} {...restaur?.info}/> )}) 
            }

            
          
          </div>
       </div>
    )
 }


 export default Body;
 