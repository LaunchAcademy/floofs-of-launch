import React from 'react';

import CatTile from "./CatTile"

const App = props => {
  // debugger
  const cats = props.data.cats

  const catCollection = cats.map((cat) => {
  //  debugger
    return (
      <CatTile 
        cat={cat}
        key={cat.id} 
      />
      )
    })
      // <div key={cat.id}>
      //   <li>{cat.name}</li>
      // </div>
    
  // [<CatTile cat={cats[0]} />
  // <CatTile cat={cats[1]} />
  // <CatTile cat={cats[2]} />
  // <CatTile cat={cats[3]} />]
  return(
    <div>
      <h1>Place Fluffballs here</h1>
      {catCollection}
    </div>
  )
}

export default App;
