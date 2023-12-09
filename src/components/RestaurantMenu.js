import { useEffect } from "react";

const RestaurantMenu = ()=> {

    useEffect(()=>{
        fetchMenu ( );
    }, [])
    

    const fetchMenu = async () => {
        const data = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6639328&lng=77.16924279999999&restaurantId=");
        const json1 = await data.json()
        console.log(json1);

        
    }
    


    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Birayani</li>
                <li>Burger</li>
                <li>Diet coke</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;