import React from "React"

import DogTile from "./DogTile"

const DogSection = (props) => {

  // dogObjects is an array of dog objects
  const dogTileComponentArray = props.dogObjects.map((dogObject) => {
    return(
      <DogTile
        dogInfo={dogObject}
      />
    )
  })

  return(
    <div>
      {dogTileComponentArray}
    </div>
  )
}

export default DogSection
