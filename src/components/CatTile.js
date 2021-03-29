import React from "react"

const CatTile = (props) => {
  return (
    <div className="tile">
      <h1>{props.catData.name}</h1>
      <p>{props.catData.human}</p>
      <p>{props.catData.personality}</p>
      <img src={props.catData.image}></img>
    </div>
  )
}

export default CatTile
