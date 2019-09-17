import React from "react"

import DogTile from "./DogTile"

const DogSection = (props) => {

  const dogComponents = props.dogs.map((dogInfo) => {
    return(
      <DogTile
        key={dogInfo.id}
        dogData={dogInfo}
      />
    )
  })

  return(
    <div className="container">

      <h2> Dog Section </h2>
      {dogComponents}
    </div>
  )
}

export default DogSection
