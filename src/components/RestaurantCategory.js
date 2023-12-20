import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    const [showItems, setShowItems] = useState(false)

   const handleClick = () => {
     if(showItems == false){
        setShowItems(true)
     }
     else {
        setShowItems(false)
     }
   };
   
    return (
        <div>
        <div className="w-6/12 bg-gray-50  shadow-xl p-4 mx-auto my-4">
            <div className="flex justify-between cursor-pointer"
                 onClick={handleClick}>
                <span className="font-bold text-lg">
                    {data.title} ({data?.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            <div>
                {/* if show items is true then only show item list */}
                { showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
        </div>
    )
}
 
export default RestaurantCategory;