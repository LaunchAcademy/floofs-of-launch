import React from 'react';

import DogSection from "./DogSection"
import CatTile from "./CatTile"

import CatSection from "./CatSection"

// move this logic to the CatSection

const App = (props) => {


  return(
    <div className="app">

        <CatSection 
          cats={props.animals.cats}
        />

    </div>
  )
}

export default App;
