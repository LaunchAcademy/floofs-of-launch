import React from "react"

import DogTile from "./DogTile"

const DogSection = (props) => {
  const dogComponents = props.dogs.map((dog) => {
    return <DogTile key={dog.id} dogData={dog} />
  })

  return dogComponents
}

export default DogSection
