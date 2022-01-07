import React from 'react'

const myName = "Scotland"

// const yesJSX = <p> Hello world!</p> new way
// const noJSX =  React.createElement("p", {onClick}, "Hello world!") old

export default function Name() {

    console.log(myName)

    return (
        <div>
            <h1 onClick = {() => console.log("That is my name ")}>My name is {myName}</h1>
        </div>
    )
}

