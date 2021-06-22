import React from 'react';

import DogSection from "./DogSection"
import CatTile from "./CatTile"

import CatSection from "./CatSection"

const App = (props) => {
  // debugger

  return(
    <div className="app">
      <DogSection dogsArray={props.animals.dogs} />

      <CatSection cats={props.animals.cats}/>

    </div>
  )
}

export default App;
