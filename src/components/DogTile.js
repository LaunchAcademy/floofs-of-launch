import React, { useState } from "react"

const DogTile = (props) => {
  let [clickedStatus, setClickedStatus] = useState(false)

  console.log(clickedStatus)

  const myClickFunction = () => {
    // set clickedStatus to true
    setClickedStatus(true)

    // IMPROVEMENT! Toggle the color
    // set up a conditional to check if it's currently clicked or not
    // if clicked, set to false
    // if(clickedStatus === true) {
    //   setClickedStatus(false)
    // } else {
    //   setClickedStatus(true)
    // }
    // if not clicked, set to true

    // setClickedStatus(!clickedStatus)
  }

  // set up the className so that it ALWAYS has "tile" in it
  let myClassName = "tile"
  //  if clickedStatus is true
  // if(clickedStatus === true) {
  if(clickedStatus) {
    // className includes "clicked"
    // we can either overwrite the class entirely
    // myClassName = "tile clicked"
    // or we can add to the existing class
    myClassName += " clicked"
  }
  // if clickedStatus is false
  // className is ONLY "tile"
  console.log("myClassName", myClassName)

  return (
    <div className={myClassName} onClick={myClickFunction}>
      <h1>{props.dogData.name}</h1>
      <p>{props.dogData.human}</p>
      <p>{props.dogData.breed}</p>
      <img src={props.dogData.image}></img>
    </div>
  )
}

export default DogTile
