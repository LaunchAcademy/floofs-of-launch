import React from "react"

import DogTile from "./DogTile.jsx" 

const DogSection = (props) => {

  const dogComponents = props.dogs.map((dogObject) => {
    
    return(
      <DogTile
        key={dogObject.id}
        dogObjectData={dogObject}
      />
    )
  })


  return(
    <div className="container">
      {dogComponents}
    </div>
  )
}

export default DogSection
