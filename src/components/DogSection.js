import React from "react"

import DogTile from "./DogTile"

const DogSection = (props) => {
  
  const dogTilesArray = props.dogsArray.map((dogObject) => {
    return(
      <DogTile 
        key={dogObject.id}
        dogData={dogObject}
      />
    )
  })

  return(
    <div>
      {dogTilesArray}
    </div>
  )
}

export default DogSection