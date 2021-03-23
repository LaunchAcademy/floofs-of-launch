import React from 'react';

import DogSection from "./DogSection"
import CatTile from "./CatTile"

const App = (props) => {
  // let catComponents = []

  // props.animals.cats.forEach((cat) => {
  //   catComponents.push(<CatTile />)
  // }) 

  const catComponents = props.animals.cats.map((catObject) => {
    return(
      <CatTile
        key={catObject.id}
        name={catObject.name}
        personality={catObject.personality}
        human={catObject.human}
        image={catObject.image}
      />
    )
  })
  
  return(
    <div>
      <DogSection dogsArray={props.animals.dogs} />
      {catComponents}
    </div>
  )
}

export default App;





//  <CatTile cats={props.animals.cats[0]} />
//       <CatTile cats={props.animals.cats[1]} />
//       <CatTile cats={props.animals.cats[2]} />
//       <CatTile cats={props.animals.cats[3]} />