import React from "react"

import CatTile from "./CatTile"

// import DogSection from "./DogSection"

const App = (props) => {
  const catsData = props.data.cats
  const catsArray = catsData.map((cat) => {

    return (
      <CatTile
        name={cat.name}
        personality={cat.personality}
        human={cat.human}
        image={cat.image}
        key={cat.id}
        id={cat.id}
      />
    )
  })

  return (
    <div>
      <h1>Place Fluffballs here</h1>
      {catsArray}
    </div>
  )
}

export default App
