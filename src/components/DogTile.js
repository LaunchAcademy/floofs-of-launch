import React from "react"

const DogTile = (props) => {
  return(
    <div>
      <h1>{props.dogData.name}</h1>
      <li>
        Human: {props.dogData.human}
      </li>
      <li>
        breed: {props.dogData.breed}
      </li>
      <img src={props.dogData.image} width="200px" />
    </div>
  )
}

export default DogTile