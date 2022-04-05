import React from "react"

const DogTile = (props) => {
  const { name, breed, human } = props

  // let dogImageCounter = 0

  // const dogImageCallbackFunction = (event) => {
  //   dogImageCounter += 1
  // }

  return (
    <div>
      Counter {dogImageCounter}
      <p>Name: {props.dogObject.name}</p>
      <p>Breed: {props.dogObject.breed}</p>
      <p>Human: {props.dogObject.human}</p>
      <img src={props.dogObject.image} onClick={dogImageCallbackFunction} />
    </div>
  );
}

export default DogTile