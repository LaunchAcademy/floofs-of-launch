import React, { useState } from 'react';

import DogTile from "./DogTile"

const App = (props) => {

  const [favoriteDogId, setFavoriteDogId ] = useState(null)

  const dogsList = props.data.dogs.map((dogObject) => {

  let showFavoriteBackground = false
  if (favoriteDogId === dogObject.id){
    showFavoriteBackground = true
  }
  
   return (
    <DogTile 
      key={dogObject.id} 
      setFavoriteDogId={setFavoriteDogId}
      dog={dogObject} 
      dogId={dogObject.id}
      showFavoriteBackground={showFavoriteBackground}
    />
  )
 });

  return (
    <div className="app">
      <div className="">{dogsList}</div>
    </div>
  );
}

export default App;
