import React from "react";

class EmployeeDetails extends React.Component{
    constructor(){
        super()
        this.state={
            name:"Nehal",
            occupation:"Coding Mentor",
            place:"India",
            exp:"3 years"
        }
    }
    changeDetails=()=>{
        this.setState({name:"Simran",occupation:"System Engineer",place:"UK"})
    }
    render(){
        return(
            <>
            <h1>My name is {this.state.name}</h1>
            <h3>I am working as a {this.state.occupation} for {this.state.exp}</h3>
            <h3>I live in {this.state.place}</h3>
            <button onClick={this.changeDetails}>Change Details</button>
            </>
        )
    }
}
export default EmployeeDetails