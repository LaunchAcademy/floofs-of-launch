import React from 'react';

import CatCollection from './CatCollection';
import CatTile from "./CatTile"

const App = props => {
  
  return(
    <div className="app">
      <h1>Place Fluffballs here</h1>

      <CatCollection 
        cats={props.data.cats}
      />

    </div>
  )
}

export default App;
