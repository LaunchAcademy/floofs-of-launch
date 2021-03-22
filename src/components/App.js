import React from 'react';

import DogSection from "./DogSection"
import CatTile from "./CatTile"

const App = (props) => {
// debugger
  return(
    <div>
      <DogSection dogsArray={props.animals.dogs} />
      <CatTile cats={props.animals.cats[0]} />
      <CatTile cats={props.animals.cats[1]} />
      <CatTile cats={props.animals.cats[2]} />
      <CatTile cats={props.animals.cats[3]} />
    </div>
  )
}

export default App;
