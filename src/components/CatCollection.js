import React, { useState } from "react"

import CatTile from "./CatTile"

const CatCollection = (props) => {

  const [bestCatId, setBestCatId] = useState(null)


  const catComponents = props.cats.map((catObject) => {

    return (
      <CatTile 
        cat={catObject}
        key={catObject.id} 
        setBestCatId={setBestCatId}
        bestCatId={bestCatId}
      />
      )
    })

  return(
    <div className="container">
      {catComponents}
    </div>
  )
}

export default CatCollection