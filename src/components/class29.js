import React from 'react'
function Car(props){
    return(
     <>
     <h1>My car name is {props.brand.name}</h1>
     <h2>My car model is {props.brand.model}</h2>
     </>
    )
}
function Garage(){
    const carInfo = {name:"Ford",model:"Mustang"}
    return(
      <Car brand={carInfo}></Car>
    )
}
export default Garage;