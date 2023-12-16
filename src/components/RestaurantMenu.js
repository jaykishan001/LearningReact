import { useEffect, useState } from "react";
import { ShimmerUi } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import userRestaurantMenu from "../utils/useRestaurantMenu";

export const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    
    const resInfo = userRestaurantMenu(resId);

    if (resInfo === null) return <ShimmerUi />;

    const {name, cuisines, cloudinaryImageId, areaName, city, costForTwoMessage} = resInfo.cards[0]?.card?.card?.info || {};
    
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
    console.log(itemCards)


    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {itemCards?.map((item) => 
                <li key = {item?.card?.info?.id}>
                    {item?.card?.info?.name}- 
                    {item?.card?.info?.price/100 ||item?.card?.info?.defauldPrice/100 }
                </li>
                )}
            </ul>
        </div>
    );
};
