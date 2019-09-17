import React from 'react';

import DogTile from "./DogTile"
import DogSection from "./DogSection"
import CatSection from "./CatSection"

const App = props => {
  // debugger

  const evilClickAlert = (event) => {
    debugger
    alert("I am evil...oh so evil....")
  }
  return(
    <div className="app">
      <h1>Place Fluffballs here</h1>

      <DogSection
        dogs={props.animals.dogs}
      />

      <CatSection
        cats={props.animals.cats}
      />

      <button className="button evil" onClick={evilClickAlert}> EVIL BUTTON </button>
    </div>
  )
}

export default App;
