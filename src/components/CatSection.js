import React, { useState } from 'react'

import CatTile from "./CatTile"

const CatSection = (props) => {

  const [selectedCatId, setSelectedCatId] = useState(null)

  const catTiles = props.cats.map((catObject) => {

    const selectCat = () => {
      setSelectedCatId(catObject.id)
    }
    // there are 4 different versions of selectCat

    let selectedStatus = false
    if (selectedCatId === catObject.id){
      selectedStatus = true
    }
    // this if logic gets evaluated for each cat. And is also evaluated everytime selectedCatId state changes

    return (
      <CatTile
        catData={catObject}
        key={catObject.id}
        catId={catObject.id}
        selectedStatus={selectedStatus}
        selectCat={selectCat}
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



