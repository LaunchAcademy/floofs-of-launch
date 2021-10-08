import React from 'react';

import CatTile from "./CatTile"

const App = (props) => {
  // debugger
  const cats = props.data.cats
  const julia = cats[0]
  const catniss = cats[1]
  const bingo = cats[2]
  const storrow = cats[3]

  return (
    <div>
      <h1>Place Fluffballs here</h1>
      <CatTile cat={julia} />
      <CatTile cat={catniss} />
      <CatTile cat={bingo} />
      <CatTile cat={storrow} />
      {/* <p>{julia.name}</p>
      <p>{catniss.name}</p>
      <p>{bingo.name}</p>
      <p>{storrow.name}</p> */}
    </div>
  )
}

export default App;
