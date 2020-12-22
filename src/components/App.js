import React from "react"

import CatTile from "./CatTile"
import DogTile from "./DogTile"
import CatSection from "./CatSection"
import DogSection from "./DogSection"

const App = (props) => {
  // debugger

  return (
    <div>
      <CatSection cats={props.animals.cats} />

      <DogSection dogs={props.animals.dogs} />
    </div>
  )
}

export default App
