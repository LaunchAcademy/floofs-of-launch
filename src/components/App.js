import React from 'react';

import DogList from "./DogList"

const App = (props) => {
  // const cooperName = props.petData.dogs[2].name
  // const cooperPic = props.petData.dogs[2].image
  
  const sayHowCringeYouAre = () => {
    alert("You are sort of cringe, but we still love you Nick")
  }

  return(
    <div className="app">
      
      <h1 className="header-text" onClick={sayHowCringeYouAre}>
        All of Ze Pets
      </h1>

      <DogList 
        dogObjectArray={props.petData.dogs}
      />

    </div>
  )
}

export default App;
