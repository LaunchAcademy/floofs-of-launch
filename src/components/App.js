import React from "react"

import DogTile from "./DogTile"

const App = (props) => {
  // debugger
  const dogTileComponents = props.animals.dogs.map((dogObject) => {

    return (
      <DogTile
        name={dogObject.name}
        breed={dogObject.personality}
        human={dogObject.human}
        image={dogObject.image}
        key={dogObject.id}
      />
    )
  })


  return (
    <div>
      <h1>Place Fluffballs here</h1>
      {dogTileComponents}
    </div>
  )
}

export default App
