import React from "react"

import DogTile from "./DogTile" 

const DogSection = (props) => {
  
  const dogs = props.dogs 

  return(
    <div className="container"> 
      <DogTile
        dogObjectData={dogs[0]}
      />
      <DogTile
        dogObjectData={dogs[1]}
      />
      <DogTile
        dogObjectData={dogs[2]}
      />
    </div>
  )
}

export default DogSection

