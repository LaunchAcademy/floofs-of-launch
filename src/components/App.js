import React from "react"

import CatTile from "./CatTile"

const App = (props) => {
  // debugger
  const catsData = props.data.cats
  const catsArray = catsData.map((cat) => {
    // debugger
    // <div key={cat.id} className="callout">
    //   <li>{cat.name}</li>
    //   <p>{cat.human}</p>
    //   <p>{cat.personality}</p>
    // </div>
    return (
      <CatTile
        name={cat.name}
        personality={cat.personality}
        human={cat.human}
        image={cat.image}
        // cat={cat}
        key={cat.id}
        id={cat.id}
      />
    )
  })

  // console.log(catsArray)

  return (
    <div>
      <h1>Place Fluffballs here</h1>
      {catsArray}
    </div>
  )
}

export default App
