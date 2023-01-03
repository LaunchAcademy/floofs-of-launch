import React from "react"

const CatTile = (props) => {
  // debugger
  const handleClick = () => {
    console.log(`Meow! My name is ${props.name}`)
  }

  return (
    <div onClick={handleClick} className="callout">
      <li>{props.name}</li>
      <p>{props.human}</p>
      <p>{props.personality}</p>
      <img src={props.image} />
    </div>
  )
}

export default CatTile
