import React from "react"

const DogTile = (props) => {
  const handleClick = () => {
    console.log(`You hugged: ${props.name}`)
  }

  return (
    <div onClick={handleClick} >
      <h3>{props.name}</h3>
      <p>{props.human}</p>
      <p>{props.breed}</p>
      <img src={props.image} />
    </div>
  )
}

export default DogTile
