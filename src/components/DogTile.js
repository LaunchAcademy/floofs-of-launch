import React from "react"

const DogTile = (props) => {
  return (
    <div className="tile">
      <h1>{props.dogData.name}</h1>
      <p>{props.dogData.human}</p>
      <p>{props.dogData.breed}</p>
      <img src={props.dogData.image}></img>
    </div>
  )
}

export default DogTile
