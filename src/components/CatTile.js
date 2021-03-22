import React from 'react'

const CatTile = (props) => {
// debugger
  return (
    <div>
      <h1>{props.cats.name}</h1>
      <p>{props.cats.personality}</p>
      <p>{props.cats.human}</p>
      <img src={props.cats.image} width="200px" />
    </div>
  )

}

export default CatTile