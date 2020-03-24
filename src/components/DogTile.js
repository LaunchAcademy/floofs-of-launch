import React from "react"

const DogTile = (props) => {

  let shameStatusClass
  let shameMessage

  if (props.dogInfo.human === "Nick"){
    shameStatusClass = "shame"

    shameMessage = <span> You silly goose </span>
  }

  return(
    <div className={`tile ${shameStatusClass}`} onClick={props.alertDogFunction}>
      <h3> {props.dogInfo.name} </h3>
      <p> Breed: {props.dogInfo.breed} </p>
      <p> Human: {props.dogInfo.human} </p>

      <img src={props.dogInfo.image}></img>

      {shameMessage}
    </div>
  )
}

export default DogTile
