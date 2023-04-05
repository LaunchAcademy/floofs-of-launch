import React, { useState } from 'react'

const DogTile = (props) => {

  const clickDog = () => {
    props.setSelectedDogId(props.dogId)
  }

  let entireClassNameString = "tile"
  
  if (props.selectedDogId === props.dogId) {
    entireClassNameString = "tile selected"
  }

  return (
    <div className={entireClassNameString} onClick={clickDog}>
      <h3>{props.dogName}</h3>
      <p>Breed: {props.breed}</p>
      <p>Human: {props.human}</p>
      <img width="300" src={props.image}/>
    </div>
  )
}

export default DogTile
