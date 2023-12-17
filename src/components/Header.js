import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

   let [btnName, setBtnName] = useState("Login");

    return (
       <div className="flex justify-between bg-orange-400 items-center px-5">
          <div className="">
             <img className="w-28" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU" />
          </div>
          <div className="  ">
             <ul className="flex p-5 m-5">
                <li className="px-6"> <Link to = "/"> Home </Link></li>
                <li className="px-6"> <Link to = "/about"> About</Link></li>
                <li className="px-6"> <Link to = "/contact">Contact </Link></li>
                <li className="px-6"> <Link to = "/">Cart</Link></li>
                <button onClick={()=> {
                  btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>            
             </ul>
          </div>
       </div>
    )
 }

 export default Header;