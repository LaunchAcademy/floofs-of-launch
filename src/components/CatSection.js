import React from "react"

import CatTile from "./CatTile"

const CatSection = (props) => {

  const cats = props.cats 

  const catTileComponents = cats.map((catObject) => {
    return(
      <CatTile
        catObjectData={catObject}
      />
    )
  })

  return (
    <div className="container">
      {catTileComponents}
    </div>
  )
}

export default CatSection

