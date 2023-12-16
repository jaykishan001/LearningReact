import React from "react";
class UserClass extends React.Component {

     constructor(props){
        super(props)
        this.state = {
            userInfo: {
               name : "default",
               location: "default"
            }
        }
    }
    


    async componentDidMount(){
        
        const data = await fetch(" https://api.github.com/users/jaykishan001");
        const json = await data.json();


        this.setState({
            userInfo: json,
        })
    }

    render() {

        return (
            <div className="user-card">  
            <h3>name : {this.state.userInfo.name} </h3>
            <h4>Location: {this.state.userInfo.location}</h4>
            <h5>github: jaykishan001</h5>
            </div>
        )
    }

    }

export default UserClass;