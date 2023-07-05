import React, { useState } from 'react'

import CatTile from "./CatTile"

const CatList = (props) => {
  
  const [selectedCatId, changeSelectedCatId] = useState(null)

  console.log(selectedCatId)

  const catTiles = props.cats.map((catObject) => {

  
    return (
      <CatTile
        catData={catObject}
        key={catObject.id}
        changeSelectedCatId={changeSelectedCatId}
        selectedCatId={selectedCatId}
      />
    )
  })

  return(
    <div className="container">
      {catTiles}
    </div>
  )
}

export default CatList



