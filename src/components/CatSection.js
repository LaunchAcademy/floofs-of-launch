import React, { useState } from "react"

import CatTile from "./CatTile"

const CatSection = (props) => {
  let [selectedCatId, setSelectedCatId] = useState(null)


  const catTiles = props.cats.map(cat => {
    // my function needs to be inside my .map
    // so that it has access to a specific `cat.id` for each cat
    // it needs to be in my CatSection parent component
    // because it needs to stay near the state so that it can update state
    const myClickFunction = () => {
      setSelectedCatId(cat.id)
      // if we wanted a cat to turn back to blue
      // we'd need conditional logic here to say
      // if the selectedCatId matches
      // change it back to null
    }

    // we need to figure out if each given child IS selected
    // default: child is not selected
    let clickedStatus = false
    // if the child we are looking at IS the selected child
    // in other words, does the selectedCatId MATCH this cat
    if(selectedCatId === cat.id) {
      clickedStatus = true
    }
    // change selected to true

    return(
      <CatTile
        catData={cat}
        // hand the myClickFunction down as a prop to CatTile
        handleClick={myClickFunction}
        // hand down a boolean telling each child whether they're selected or not
        selected={clickedStatus}
        key={cat.id}
      />
    )
  })

  console.log(selectedCatId)

  return (
    <div className="container">
      {catTiles}
    </div>
  )
}

export default CatSection
