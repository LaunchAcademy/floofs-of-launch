import React from 'react';

import DogSection from "./DogSection" 
import CatSection from "./CatSection"

const App = (props) => {
  const arrayOfDogObjects = props.data.dogs

  // const cooperData = props.data.dogs[2]
  // const cooperData = arrayOfDogObjects[2]
  return(
    <div className="app">
      <h1>Place Fluffballs here</h1>

      <DogSection 
        dogs={arrayOfDogObjects}
      />
   
      <CatSection 
        cats={props.data.cats}
      />
  
    </div>
  )
}

export default App;
