import React, { useState } from 'react';

import DogTile from "./DogTile"
import CatSection from "./CatSection"
import DogSection from './DogSection';

const App = (props) => {

 

  return (
    <div className="app">
        <DogSection dogs={props.animals.dogs} />

        <CatSection cats={props.animals.cats} />
    </div>
  )
}

export default App;
