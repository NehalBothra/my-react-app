import React from 'react'
function Coding() {
    return (
        <>
            <h2>Coding Languages</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
        </>
    )
}

function Computer() {
    return (
        <>
            <h1>We are getting output from other function that is our coding function to our computer function</h1>
        <Coding></Coding>
        </>
    )
}
export default Computer
