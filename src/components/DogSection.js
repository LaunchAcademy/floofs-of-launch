import React from "react"

import DogTile from "./DogTile"

const DogSection = (props) => {
    
    const dogsData = props.data.dogs
    const dogTilesArray = dogsData.map((dog) => {
        return (
            <DogTile
                name={dog.name}
                breed={dog.breed}
                human={dog.human}
                image={dog.image}
                key={dog.id}
                id={dog.id}
            />
        )
    })

    return (
        <div>
            <h2>Dogs:</h2>
            {dogTilesArray}
        </div>
    )
}

export default DogSection
