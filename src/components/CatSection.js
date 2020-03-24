import React from "react"

import CatTile from "./CatTile"

const CatSection = (props) => {

  const catTileComponents = props.catObjects.map((catObject) => {

    return(
      <CatTile
        key={catObject.id}
        catInfo={catObject}
      />
    )
  })

  return(
    <div className="container">
      {catTileComponents}
    </div>
  )
}


export default CatSection
