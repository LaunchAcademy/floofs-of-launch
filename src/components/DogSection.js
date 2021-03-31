import React from "react"

import DogTile from "./DogTile"

const DogSection = (props) => {
  const dogComponents = props.dogs.map((dog) => {
    return <DogTile key={dog.id} dogData={dog} />
  })

  return(
    <div className="container">
      {dogComponents}
    </div>
  )
}

export default DogSection
