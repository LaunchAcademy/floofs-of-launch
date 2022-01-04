import React from 'react';

import CatTile from "./CatTile"

const App = (props) => {
  // console.log(props);
  // debugger
  
  const catsArray = props.data.cats.map((cat) => {
    // debugger

    // <li key={cat.id}>{cat.name}</li>
    return (
      <CatTile 
        key={cat.id}
        name={cat.name}
        id={cat.id}
        cat={cat}
      />
    )
  })

  return (
    <div>
      <h1>Place Fluffballs here</h1>
      
      <ul>
        {catsArray}
      </ul>
    </div>
  )
}

export default App;
