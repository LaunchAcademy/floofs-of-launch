import React from "react"

const CatTile = (props) => {
  // debugger

  return (
    <div className="tile">
      <h1>{props.catData.name}</h1>
      <p>{props.catData.human}</p>
      <p>{props.catData.personality}</p>
      <img src={props.catData.image} />
    </div>
  )
}

export default CatTile
