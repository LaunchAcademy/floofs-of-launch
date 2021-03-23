import React from 'react'

const CatTile = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.personality}</p>
      <p>{props.human}</p>
      <img src={props.image} width="200px" />
    </div>
  )
}

export default CatTile