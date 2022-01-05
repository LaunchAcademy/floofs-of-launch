import React from 'react';

import DogSection from "./DogSection"
import CatTile from "./CatTile"

import CatSection from "./CatSection"

const App = (props) => {
  // debugger
  const catTiles = props.animals.cats.map((catObject) => {
    return (
      <CatTile
        catData={catObject}
        key={catObject.id}
      />
    )
  })

  return(
    <div className="app">

      <div className="container">
        {catTiles}
      </div>

    </div>
  )
}

export default App;
