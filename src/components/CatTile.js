import React from 'react'

const CatTile = (props) => {

  let catClassName = "tile"
  if (props.selectedStatus === true) {
    catClassName = "tile selected"
  }

  return (
    <div className={catClassName} onClick={props.clickCat}>
      <h1>{props.name}</h1>
      <p>Personality: {props.personality}</p>
      <p>Human: {props.human}</p>
      <img width="250" src={props.image}/>
    </div>
  )

}

export default CatTile