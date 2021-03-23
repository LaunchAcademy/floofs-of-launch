import React from 'react'

import DogTile from "./DogTile"

const DogSection = props => {


  const dogsList = props.dogsArray.map((dogObject) => {

    const floofAlert = () => {
      alert(`FLOOF ALERT! ${dogObject.name} is hella cute`)
    }

    return (
      <DogTile 
        key={dogObject.id} 
        dog={dogObject} 
        alertFunction={floofAlert} 
      />
    )
  })

  return (
    <div>
      {dogsList}
    </div>
  )
}

export default DogSection