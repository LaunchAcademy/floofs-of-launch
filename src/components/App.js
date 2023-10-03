import React from 'react';

import CatTile from './CatTile';

const App = props => {
  // debugger
  const catsDataArray = props.data.cats

  const catDisplay = catsDataArray.map((catData) => {
    // console.log(catData);
    // <li key={catData.id}>
    //   {catData.name}
    // </li>
    return (
      <CatTile
        key={catData.id} 
        name={catData.name}
        human={catData.human}
        personality={catData.personality}
        image={catData.image}
        catData={catData}
      />
    )
  })

  // console.log(catDisplay);

  return(
    <div>
      <h1>Place Fluffballs here</h1>
      {catDisplay}
    </div>
  )
}

export default App;
