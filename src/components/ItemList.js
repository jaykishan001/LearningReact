import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items}) => {

    const dispatch = useDispatch()
    const handleAddItem = (item) => {
    // dispatch and action 
       dispatch (addItem(item));
       
    }

    return (
        <div>
                {items.map(item => (
                    
                    <div key= {item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                        
                        <div  className="w-9/12"> 
                            <span>{item.card.info.name}</span> 
                            <span> - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                            <p className="text-sm">{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12 " >
                        <img src={CDN_URL+ item.card.info.imageId} className="w-48 h-36 rounded-lg "></img>
                        <button className="p-2 bg-white absolute rounded-lg" 
                        onClick={ () => handleAddItem(item)}>Add +</button>
                        </div>
                    </div>
                ))}
             
        </div>
    )
}

export default ItemList ;