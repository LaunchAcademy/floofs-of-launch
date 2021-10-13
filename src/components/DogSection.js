import React, { useState }  from 'react'

import DogTile from "./DogTile"

const DogSection = props => {

  const [selectedDogId, setSelectedDogId] = useState(2)
  
  console.log("Logging selected dog ID in DogSection")
  console.log(selectedDogId)


  const dogsList = props.dogsArray.map((dogObject) => {

    return (
      <DogTile 
        key={dogObject.id} 
        name={dogObject.name} 
        breed={dogObject.breed} 
        human={dogObject.human} 
        image={dogObject.image} 
        id={dogObject.id} 
        selectedDogId={selectedDogId}
        setSelectedDogId={setSelectedDogId}
      />
    )
  })

  return (
    <div className="container">
      {dogsList}
    </div>
  )
}

export default DogSection