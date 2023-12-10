import { useEffect, useState } from "react";
import { ShimmerUi } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

export const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();


    useEffect(() => {
        fetchMenu();
    }, []);


    async function fetchMenu() {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    if (resInfo === null) return <ShimmerUi />;

    const {name, cuisines, cloudinaryImageId, areaName, city, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};
    
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
    console.log(itemCards);


    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {itemCards?.map((item) => 
                <li key={item.card.info.id}>
                    {item?.card?.info?.name}- 
                    {item?.card?.info?.price/100 ||item?.card?.info?.defauldPrice/100 }
                </li>
                )}
            </ul>
        </div>
    );
};
