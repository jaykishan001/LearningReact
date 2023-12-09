import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

   let [btnName, setBtnName] = useState("Login");

    return (
       <div className="header">
          <div className="logo-container">
             <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU" />
          </div>
          <div className="nav-items">
             <ul>
                <li> <Link to = "/"> Home </Link></li>
                <li> <Link to = "/about"> About</Link></li>
                <li> <Link to = "/contact">Contact </Link></li>
                <li> <Link to = "/">Cart</Link></li>
                <button onClick={()=> {
                  btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
                
             </ul>
          </div>
       </div>
    )
 }

 export default Header;