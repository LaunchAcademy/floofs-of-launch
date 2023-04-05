import React, { useState } from 'react';

import DogTile from "./DogTile"

const App = (props) => {

 const dogTileComponents = props.animals.dogs.map((dogObject) => {
   return (
    <DogTile 
      key={dogObject.id} 
      dogName={dogObject.name} 
      breed={dogObject.breed} 
      human={dogObject.human} 
      image={dogObject.image} 
    />
  )
 });

  return (
    <div className="app">
        {dogTileComponents}
    </div>
  )
}

export default App;
