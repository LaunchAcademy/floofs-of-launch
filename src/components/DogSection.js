import React from "react"

import DogTile from "./DogTile"

const DogSection = (props) => {
  const dogTiles = props.dogs.map((dog) => {
    const onClickHandler = (event) => {
      alert(event.currentTarget.textContent)
    }

    return (
      <DogTile onClickHandler={onClickHandler} key={dog.id} dogData={dog} />
    )
  })

  return <div>{dogTiles}</div>
}

export default DogSection
