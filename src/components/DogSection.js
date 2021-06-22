import React from 'react'

import DogTile from "./DogTile"

const DogSection = props => {
  
  const dogsList = props.dogsArray.map((dogObject) => {
    return (
      <DogTile key={dogObject.id} dog={dogObject} />
    )
  })

  return (
    <div className="container">
      {dogsList}
    </div>
  )
}

export default DogSection