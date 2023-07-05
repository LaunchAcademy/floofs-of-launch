import React, { useState } from 'react';

import DogList from "./DogList"
import CatList from './CatList';

const App = (props) => {

  const tellNickHowCringeHeIs = () => {
    alert("you are cringe but we love you")
  }


  return (
    <div className="app">

      <h1 onClick={tellNickHowCringeHeIs}>Here are Ze Pets</h1>

      <DogList dogObjectArray={props.petData.dogs}/>
      <CatList cats={props.petData.cats}/>
    </div>
  )
}

export default App;
