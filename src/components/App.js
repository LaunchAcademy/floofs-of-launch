import React, { useState } from 'react';

import CatTile from './CatTile';

const App = props => {
  // debugger
  const catsDataArray = props.dataFromApp.cats

  const [favoriteCatId, setCatId] = useState(4)

  console.log(favoriteCatId)

  const catList = catsDataArray.map((catObject) => {
    return (
      <CatTile 
        key={catObject.id} 
        catObject={catObject} 
        favoriteCatId={favoriteCatId}
        setCatId={setCatId}
      />
    )
  })


  return(
    <div className="app">
      <h1>Place Fluffballs here</h1>
      <div>
        {catList}
      </div>
    </div>
  )
}

export default App;
