import { MENU_API } from "./constant";
import { useEffect, useState } from "react";

const userRestaurantMenu = (resid) => {

    const [resInfo, setResInfo] = useState(null);
     
   useEffect(()=>{
    fetchData();
   }, [])
    
   const fetchData = async () => {
         
    const data = await fetch(MENU_API + resid);
    const json = await data.json();
    
    setResInfo(json.data)
   }
    
    return resInfo 

}
export default userRestaurantMenu;