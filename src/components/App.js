import React from 'react';

import DogSection from "./DogSection"
// import CatTile from "./CatTile"

// import CatSection from "./CatSection"

const App = (props) => {

  return(
    <div className="app">
      <DogSection dogsArray={props.animalPropData.dogs} />
    </div>
  )
}

export default App;

{/* <CatSection cats={props.animals.cats}/> */}