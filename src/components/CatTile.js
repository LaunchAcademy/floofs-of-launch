import React from "react"

const CatTile = (props) => {
// debugger
  const petTheCat = (event) => {
    console.log(`You pet the cat ${props.cat.name}. MEOW!`);
  }

  return (
    <div className="callout">
      <p onClick={petTheCat}>I am a cat! My name is {props.cat.name}</p>
      <p>My personality type is {props.cat.personality}</p>
      <img src={props.cat.image} />
    </div>
  )
}

export default CatTile