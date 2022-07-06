import React, { useState } from 'react';

import DogSection from './DogSection';
import CatSection from './CatSection';

const App = (props) => {


  return (
    <div className="app">
      <DogSection dogsArray={props.data.dogs} />

      <CatSection catsArray={props.data.cats} />
    </div>
  );
}

export default App;
