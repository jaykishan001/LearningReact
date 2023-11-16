import { useState } from "react";

const Header = () => {

   let [btnName, setBtnName] = useState("Login");

    return (
       <div className="header">
          <div className="logo-container">
             <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU" />
          </div>
          <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
                <button onClick={()=> {
                  btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
                
             </ul>
          </div>
       </div>
    )
 }

 export default Header;