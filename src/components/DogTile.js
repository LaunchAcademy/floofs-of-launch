import React from "react"

const DogTile = (props) => {
  
  // debugger
  
  return(
    <div>
      <h1>{props.dogData.name}</h1>
      <p>{props.dogData.human}</p>
      <p>{props.dogData.breed}</p>
      <img src={props.dogData.image} />
    </div>
  )
}

export default DogTile