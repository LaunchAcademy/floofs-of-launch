import React from 'react';

import CatTile from './CatTile';

const App = props => {
  // debugger
  const catsDataArray = props.dataFromApp.cats

  const catList = catsDataArray.map((cat) => {
    // console.log(cat)
    return (
      <CatTile 
        key={cat.id} 
        catObject={cat} 
        // name={cat.name}
        // personality={cat.personality}
        // id={cat.id}
      />
      // <div key={cat.id}>
      //   <h3>{cat.name} owns {cat.human}</h3>
      //   <p>{cat.personality}</p>
      //   <img src={cat.image} />
      // </div>
    )
  })

  console.log(catList)

  return(
    <div>
      <h1>Place Fluffballs here</h1>
      <div>
        {catList}
      </div>
    </div>
  )
}

export default App;
