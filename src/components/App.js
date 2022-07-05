import React from 'react';

import DogTile from "./DogTile"
import DogSection from "./DogSection"

const App = props => {


  return(
    <div className="app">
      <DogSection 
        arrayOfDogObjects={props.data.dogs}
      />
    </div>
  )
}

export default App;
