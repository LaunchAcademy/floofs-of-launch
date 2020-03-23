import React from "react"

const DogTile = (props) => {

  return(
    <div className="tile">
      <h3> {props.dogInfo.name} </h3>
      <p> Breed: {props.dogInfo.breed} </p>
      <p> Human: {props.dogInfo.human} </p>

      <img src={props.dogInfo.image}></img>
    </div>
  )
}

export default DogTile
