import React from 'react'
class States extends React.Component{
    constructor(){
        super()
        this.state={
            coding:"HTML",
            founder:"Tim Berners Lee",
            year:1993
        }
    }
    changingText=()=>{
        this.setState({coding:"CSS",founder:"HÃ¥kon Wium Lie", year:1994})
    }
    render(){
        return(
            <>
            <h1>We are using {this.state.coding}</h1>
            <h2>The founder of {this.state.coding} is {this.state.founder}</h2>
            <p>It was found in {this.state.year}</p>
            <button onClick={this.changingText}>Changing</button>
            </>
        )
    }
}
export default States
