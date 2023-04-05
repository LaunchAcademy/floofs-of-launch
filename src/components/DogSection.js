import React, { useState } from 'react'

import DogTile from "./DogTile"


const DogSection = props => {
    const [selectedDogId, setSelectedDogId] = useState(null)

    const dogTileComponents = props.dogs.map((dogObject) => {
        return (
            <DogTile
                key={dogObject.id}
                dogId={dogObject.id}
                dogName={dogObject.name}
                breed={dogObject.breed}
                human={dogObject.human}
                image={dogObject.image}
                setSelectedDogId={setSelectedDogId}
                selectedDogId={selectedDogId}
            />
        )
    });

    return(
        <div className="container">
            {dogTileComponents}
        </div>
    )
}

export default DogSection