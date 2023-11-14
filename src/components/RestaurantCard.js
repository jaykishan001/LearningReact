import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) =>{
    const {restaurants} = props;
    const {name, cuisines, avgRating , costForTwo, locality,cloudinaryImageId} = restaurants.info;
    return (
       <div className="resturant-card">
          <img  src={CDN_URL + cloudinaryImageId}/>
          <h3>{name}</h3>
          <h3>{cuisines.join(",")}</h3>
          <h4>{avgRating}</h4>
          <h5>{costForTwo}</h5>
          <h5>{locality}</h5>
       </div>
    )
 }

 export default ResturantCard;