import React from "react"

import CatTile from "./CatTile"

const CatSection = (props) => {
  return (
    <div className="container">
      <CatTile catData={props.cats[0]} />
      <CatTile catData={props.cats[1]} />
      <CatTile catData={props.cats[2]} />
      <CatTile catData={props.cats[3]} />
    </div>
  )
}

export default CatSection
