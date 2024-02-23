import React, { Component } from "react";
import User from "./User";


class About extends React.Component  {
     
    render(){

        return (
            <div>
                <h1>About</h1>
                <User />
                <h4>I am learning react just few tutorials away to master it</h4>
            </div>
        )

    }

    
}
export default About;