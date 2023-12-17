import { CDN_URL } from "../utils/constant";

const ResturantCard = ({name, cuisines, avgRating , costForTwo, locality,cloudinaryImageId}) =>{
    
    return (
       
       <div className="m-4 p-4 w-[300px] rounded-md truncate " style={{backgroundColor: "#f0f0f0"}}>
          <img  src={CDN_URL + cloudinaryImageId} className="h-[200px] w-[300px] my-4 rounded-lg"/>
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h3 className="">{cuisines.join(",")}</h3>
          <h4>{avgRating}</h4>
          <h5 className="">{costForTwo}</h5>
          <h5>{locality}</h5>
       </div>
    )
 }

 export default ResturantCard;