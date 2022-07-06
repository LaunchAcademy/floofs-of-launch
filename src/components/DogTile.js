import React, { useState} from 'react'

const DogTile = props => {


  let selectedClassName = ""
  if (props.favoriteDogId === props.id){
    selectedClassName = "selected"
  }

  const favoriteTheDog = () => {
    props.setFavoriteDogId(props.id)
  }

    return (
      <div 
        className={`tile ${selectedClassName}`} 
        onClick={favoriteTheDog}
      >
        <h1>{props.name}</h1>
        <p>{props.breed}</p>
        <p>{props.human}</p>
        <img src={props.image} width="200px" />
      </div>
    );
}

export default DogTile
