import React from "react"

const DogTile = (props) => {
  return(
    <div className="tile">
      <p> Name:{props.dogObjectData.name}</p>
      <p> Breed: {props.dogObjectData.breed}</p>
      <p> Human: {props.dogObjectData.human}</p>
      <img src={props.dogObjectData.image} />
    </div>
  )
}

export default DogTile