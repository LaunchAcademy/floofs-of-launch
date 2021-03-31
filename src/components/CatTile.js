import React from "react"

const CatTile = (props) => {
  console.log(`${props.catData.name}'s tile was rendered!`)
  // set up the className so that it ALWAYS has "tile" in it
  let myClassName = "tile"
  //  if props.selected is true

  if(props.selected) {
    // className includes "clicked"
    // we can either overwrite the class entirely
    // myClassName = "tile clicked"
    // or we can add to the existing class
    myClassName += " clicked"
  }
  // if props.selected is false
  // className is ONLY "tile"
  console.log("myClassName", myClassName)

  return (
    <div className={myClassName} onClick={props.handleClick}>
      <h1>{props.catData.name}</h1>
      <p>{props.catData.human}</p>
      <p>{props.catData.personality}</p>
      <img src={props.catData.image}></img>
    </div>
  )
}

export default CatTile
