import React, { useState } from 'react'

const DogTile = (props) => {

  
  const clickDog = () => {
    props.setFavoriteDogId(props.id)
  }
  
  let favoritedClassName = ""
  if (props.favoriteDogId === props.id) {
    favoritedClassName = "selected"
  }

  return (
    <div className={`tile ${favoritedClassName}`} onClick={clickDog}>
      <h3>{props.name}</h3>
      <p>Breed: {props.breed}</p>
      <p>Human: {props.human}</p>
      <img width="300" src={props.image}/>
    </div>
  )

}

export default DogTile
