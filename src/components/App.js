import React from 'react';

import DogTile from "./DogTile"
import DogSection from "./DogSection"
import CatSection from "./CatSection"

const App = props => {
  // debugger
  return(
    <div className="app">
      <h1>Place Fluffballs here</h1>

      <DogSection
        dogs={props.animals.dogs}
      />

      <CatSection
        cats={props.animals.cats}
      />
    </div>
  )
}

export default App;
