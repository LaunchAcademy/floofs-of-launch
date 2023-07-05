import React, { useState } from "react"

import DogTile from "./DogTile"

const DogList = (props) => {

    const [favoriteDogId, setFavoriteDogId] = useState(null)
    
    console.log("favorite Id in App", favoriteDogId)


    const dogTileComponents = props.dogObjectArray.map((dogObject) => {


        return (
            <DogTile
                key={dogObject.id}
                id={dogObject.id}
                name={dogObject.name}
                breed={dogObject.breed}
                human={dogObject.human}
                image={dogObject.image}
                setFavoriteDogId={setFavoriteDogId}
                favoriteDogId={favoriteDogId}
            />
        )
    })

    return (
        <div className="list">
            {dogTileComponents}
        </div>
    )
}

export default DogList 