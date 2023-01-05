import React, { useState } from "react"

import CatSection from "./CatSection"

// import DogSection from "./DogSection"

const App = (props) => {

  const catsData = props.data.cats

  return (
    <div>
      <h1>Place Fluffballs here</h1>
      <CatSection 
        catsData={catsData}
      />
    </div>
  )
}

export default App
