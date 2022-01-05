import React, { useState } from 'react'

const CatTile = (props) => {


  let catClassName = "tile"
  if (props.selectedCatId === props.catId){
    catClassName += " selected"
  }

  return (
    <div className={catClassName} onClick={props.selectCat}>
      <h1>{props.catData.name}</h1>
      <p>Personality: {props.catData.personality}</p>
      <p>Human: {props.catData.human}</p>
      <img width="250" src={props.catData.image}/>
    </div>
  )

}

export default CatTile

// object destructuring props