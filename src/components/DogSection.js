import React from "React"

import DogTile from "./DogTile"

const DogSection = (props) => {

  const dogTileComponentArray = props.dogObjects.map((dogObject) => {

    let alertDogStatus = (event) => {

      if (event.currentTarget.classList.value.includes("shame")){
        console.log("shame messages from inside of your event listener callback")
      }

      alert(event.currentTarget.textContent)
    }

    return(
      <DogTile
        key={dogObject.id}
        dogInfo={dogObject}
        alertDogFunction={alertDogStatus}
      />
    )
  })

  return(
    <div>
      {dogTileComponentArray}
    </div>
  )
}

export default DogSection
