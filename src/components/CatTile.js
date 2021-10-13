import React from 'react'

const CatTile = (props) => {

  return (
    <div className="tile">
      <h1>{props.catData.name}</h1>
      <p>Personality: {props.catData.personality}</p>
      <p>Human: {props.catData.human}</p>
      <img width="250" src={props.catData.image} />
    </div>
  )

}

export default CatTile

