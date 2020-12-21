import React from "react"

import DogTile from "./DogTile"

const DogSection = (props) => {
  // debugger
  // const allTheDogs = [
  //   <DogTile
  //     dogData={props.dogs[0]}
  //   />,
  //   <DogTile
  //     dogData={props.dogs[1]}
  //   />,
  //   <DogTile
  //     dogData={props.dogs[2]}
  //   />
  // ]

  return (
    <div>
      <DogTile
        dogData={props.dogs[0]}
      />
      <DogTile
        dogData={props.dogs[1]}
      />
      <DogTile
        dogData={props.dogs[2]}
      />
    </div>
  )
}

export default DogSection