import React, { useState } from 'react'
import CatTile from "./CatTile"

const CatSection = (props) => {

  const [clickedCatId, changeClickedCatId] = useState(null)
  
  const catTiles = props.cats.map((catObject) => {
    
    const clickCat = () => {
      changeClickedCatId(catObject.id)
    }

    let selectedStatus = false
    if (clickedCatId === catObject.id){
      selectedStatus = true
    }

    return (
      <CatTile
        catId={catObject.id}
        catName={catObject.name}
        human={catObject.human}
        personality={catObject.personality}
        image={catObject.image}
        key={catObject.id}  
        clickCat={clickCat}
        selectedStatus={selectedStatus}
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



