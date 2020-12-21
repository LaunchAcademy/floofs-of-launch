import React from "react"

import CatTile from "./CatTile"

const CatSection = (props) => {
 
  const allTheCats = props.cats.map((cat) => {
    // debugger
    
    return(
      <CatTile 
        key={cat.id}
        catData={cat}
      />
    )
  })

  // debugger


  return(
    <div>
      {allTheCats}
    </div>
  )
}

export default CatSection