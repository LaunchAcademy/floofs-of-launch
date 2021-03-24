import React, { useState } from 'react';

import DogSection from "./DogSection"
import CatTile from "./CatTile"

const App = (props) => {
  //this useState is for selected and unselect single floofs
  const [favoriteFloof, setFavoriteFloof] = useState(null)

  //this useState is for selected and unselect a group of floofs
  // const [selectedFloofs, setSelectedFloofs] = useState([])

  const catComponents = props.animals.cats.map((catObject) => {

    // this is how you set up a single floof to be clicked
    let selectedStatus = false
    if (favoriteFloof === catObject.id) {
      selectedStatus = true
    }

    const handleClick = () => {
      if (selectedStatus === false) {
        setFavoriteFloof(catObject.id)
      } else {
        setFavoriteFloof(null)
      }
    }

    // this is a handleClick for an array of floofs
    // the top part stores all status as false, but when the selectedFloofs includes the catObject.id that was clicked on, it will change status to true

    // let selectedStatus = false
    // if (selectedFloofs.includes(catObject.id))  {
    //   selectedStatus = true
    // }

    // In this handlClick if the selectedFloofs includes the clicked catObject.id, then you want to filter out that catObject.id from your selectedFloofs, otherwise if it's not there add it to selectedFloofs
    
    // const handleClick = () => {
    //   if (selectedFloofs.includes(catObject.id)) {
    //     setSelectedFloofs(selectedFloofs.filter(cat => cat != catObject.id))
    //   } else {
    //     setSelectedFloofs(selectedFloofs.concat(catObject.id))
    //   }
    // }

    return(
      <CatTile
        key={catObject.id}
        name={catObject.name}
        personality={catObject.personality}
        human={catObject.human}
        image={catObject.image}
        handleClick={handleClick}
        selectedStatus={selectedStatus}
      />
    )
  })
  
  return(
    <div className="app">
      
      {catComponents}
    </div>
  )
}

export default App;


{/* <DogSection dogsArray={props.animals.dogs} /> */}


//  <CatTile cats={props.animals.cats[0]} />
//       <CatTile cats={props.animals.cats[1]} />
//       <CatTile cats={props.animals.cats[2]} />
//       <CatTile cats={props.animals.cats[3]} />