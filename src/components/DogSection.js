import React, { useState } from 'react'

import DogTile from "./DogTile"

const DogSection = props => {

    const [favoriteDogId, setFavoriteDogId] = useState(null)

    console.log("Favorite Dog ID:", favoriteDogId)

    let secretMessage = null 
    if (favoriteDogId === 3){
        secretMessage = <p> You matter to me (Cooper) </p>
    }



    const dogComponents = props.dogsArray.map((dogObject) => {
        return (
            <DogTile
                key={dogObject.id}
                id={dogObject.id}
                name={dogObject.name}
                human={dogObject.human}
                breed={dogObject.breed}
                image={dogObject.image}
                setFavoriteDogId={setFavoriteDogId}
                favoriteDogId={favoriteDogId}
            />
        )
    });

    return(
        <div className="container">
            {secretMessage}
            {dogComponents}
        </div>
    )

}

export default DogSection