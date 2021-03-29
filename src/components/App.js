import React from "react"

import CatSection from "./CatSection"
import DogSection from "./DogSection"

const App = (props) => {
  return (
    <div className="app">
      <DogSection dogs={props.data.dogs} />
      <CatSection cats={props.data.cats} />
    </div>
  )
}

export default App
