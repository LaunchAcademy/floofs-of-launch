import React from "react"

const CatTile = (props) => {
  // debugger
  return (
    <div>
      <h3>{props.cat.name}</h3>
      <p>{props.cat.human}</p>
      <p>{props.cat.personality}</p>
    </div>
  )
}

export default CatTile;