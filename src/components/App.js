import React, { useState } from 'react';

import CatTile from './CatTile';

const App = props => {

  const [favoritedCatId, setFavoritedCatId] = useState(4)

  const catsDataArray = props.data.cats
  const catTileComponents = catsDataArray.map((catData) => {

    return (
      <CatTile
        key={catData.id} 
        id={catData.id}
        name={catData.name}
        human={catData.human}
        personality={catData.personality}
        image={catData.image}
        setFavoritedCatId={setFavoritedCatId}
        favoritedCatId={favoritedCatId}
      />
    )
  })

  return(
    <div className="app">
      <h1>Place Fluffballs here</h1>
      {catTileComponents}
    </div>
  )
}

export default App;
