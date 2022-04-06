import React, { useState } from 'react';

import DogTile from "./DogTile"

const App = (props) => {

  const [favoriteDogId, setFavoriteDogId ] = useState(null)



 const dogsList = props.data.dogs.map((dogObject) => {

  let showFavoriteBackground = false
  if (favoriteDogId === dogObject.id){
    showFavoriteBackground = true
  }

  const favoriteDog = () => {
    setFavoriteDogId(dogObject.id);
  }
  
   return (
    <DogTile 
      key={dogObject.id} 
      favoriteDog={favoriteDog}
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
