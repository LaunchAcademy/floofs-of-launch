import React from 'react'

import DogTile from "./DogTile"

const DogSection = props => {
  const dogsList = props.dogsArray.map((dogObject) => {
    debugger
    return (
      <DogTile key={dogObject.id} dog={dogObject} />
    )
  })

  return (
    <div>
      {dogsList}
    </div>
  )
}

export default DogSection