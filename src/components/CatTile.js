import React, { useState } from "react"
  
const CatTile = (props) => {

  const handleClick = (event) => {
    props.setCatId(props.catObject.id)
  }

  let catFavoriteClassName = ""
  if (props.favoriteCatId === props.catObject.id) {
    catFavoriteClassName = "bestest-floof"
  }

  
  return (
    <div className={`tile ${catFavoriteClassName}`} onClick={handleClick}>
      <h3>{props.catObject.name} owns {props.catObject.human}</h3>
      <p>{props.catObject.personality}</p>
      <img src={props.catObject.image} width="200px"/>
    </div>
  )
}

export default CatTile