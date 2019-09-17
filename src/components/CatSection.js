import React from "react"

import CatTile from "./CatTile"

const CatSection = (props) => {

  return(
    <div className="container">
      <h2> Cat Section </h2>

      <CatTile
        catData={props.cats[0]}
        secretMessage="I love chicken oh so much yum yum in my tum"
      />
      <CatTile
        catData={props.cats[1]}
      />
      <CatTile
        catData={props.cats[2]}
      />
      <CatTile
        catData={props.cats[3]}
      />
    </div>
  )
}

export default CatSection
