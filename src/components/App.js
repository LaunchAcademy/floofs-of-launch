import React from 'react';

import DogSection from "./DogSection"
import CatSection from "./CatSection"

const App = props => {

  return(
    <div className="app">
      <h1>Lovely EE Pets</h1>

      <DogSection
        dogObjects={props.data.dogs}
      />

      <CatSection
        catObjects={props.data.cats}
      />
    </div>
  )
}

export default App;
