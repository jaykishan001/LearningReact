import { useEffect, useState } from "react";
import { ShimmerUi } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import userRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

export const RestaurantMenu = () => {

    const {resId} = useParams();
    
    const resInfo = userRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null)

    if (resInfo === null) return <ShimmerUi />;

    const {name, cuisines, cloudinaryImageId, areaName, city, costForTwoMessage} = resInfo.cards[0]?.card?.card?.info || {};
    
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

    const catergories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    
    const categoryData = catergories?.filter((c) => (
          c.card.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     ))

    return (
        <div className="text-center">
            <h1 className="text-xl font-bold">{name}</h1>
            <h2 className="text-lg font-bold">{costForTwoMessage}</h2>
              
            {categoryData?.map((catergory, index)=> (

                <RestaurantCategory 
                data={catergory?.card?.card}
                key={catergory?.card?.card.title} 
                showItems = {index===showIndex ? true : false}
                setShowIndex = {()=> setShowIndex(index)}
                />

            ))}

        </div>
    );
};

