import React from 'react';

// import DogTile from "./DogTile"
import DogSection from "./DogSection"
import CatTile from "./CatTile"

const App = props => {
  return(
    <div>
      <DogSection 
        dogsArray={props.animals.dogs}
      />

      <CatTile
        catData={props.animals.cats[0]}
      />
      <CatTile
        catData={props.animals.cats[1]}
      />
      <CatTile
        catData={props.animals.cats[2]}
      />
      <CatTile
        catData={props.animals.cats[3]}
      />
    </div>
  )
}

export default App;