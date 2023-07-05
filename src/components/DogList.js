import React from "react"

import DogTile from "./DogTile"

const DogList = (props) => {
    console.log(props)

    const dogTileComponents = props.dogObjectArray.map((dogObject) => {
        return (
            <DogTile
                key={dogObject.id}
                name={dogObject.name}
                breed={dogObject.breed}
                human={dogObject.human}
                image={dogObject.image}
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