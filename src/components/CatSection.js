import React from 'react'

import CatTile from "./CatTile"

const CatSection = (props) => {

  const catTiles = props.cats.map((catObject) => {
    return (
      <CatTile
        catData={catObject}
        key={catObject.id}
      />
    )
  })

  return(
    <div className="container">
      {catTiles}
    </div>
  )
}

export default CatSection



