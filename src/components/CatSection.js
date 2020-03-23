import React from "react"

import CatTile from "./CatTile"

const CatSection = (props) => {

  return(
    <div className="container">
      <CatTile
        catInfo={props.catObjects[0]}
      />
      <CatTile
        catInfo={props.catObjects[1]}
      />
      <CatTile
        catInfo={props.catObjects[2]}
      />
      <CatTile
        catInfo={props.catObjects[3]}
      />
    </div>
  )
}


export default CatSection
