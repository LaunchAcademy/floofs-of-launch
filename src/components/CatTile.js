import React, { useState } from "react"

const CatTile = (props) => {

  const handleClick = () => {
    props.changeSelectedCatId(props.id)
  }
  
  let favoriteClass 
  if (props.id === props.selectedCatId){
    favoriteClass = "bestest-floof"
  }

  return (
    <div onClick={handleClick} className={`callout ${favoriteClass}`}>
      <li>{props.name}</li>
      <p>{props.human}</p>
      <p>{props.personality}</p>
      <img width="300px" src={props.image} />
    </div>
  )
}

export default CatTile
