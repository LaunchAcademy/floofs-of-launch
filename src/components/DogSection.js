import React from "react"
import DogTile from "./DogTile"


const DogSection = (props) => {
    
    const dogTileComponents = props.arrayOfDogObjects.map((dogObject) => {

        const petDog = () => {
            alert(`You have pet ${dogObject.name}`)
        }

        return(
            <DogTile
                key={dogObject.id}
                name={dogObject.name}
                image={dogObject.image}
                breed={dogObject.breed}
                human={dogObject.human}
                petFunction={petDog}
            />
        )
    })

    const myFirstCallbackFunction = () => {
        // alert("oh my god I am so proud of you")
    }

    

    return(
        <ul className="container" onClick={myFirstCallbackFunction}>
            {dogTileComponents}
        </ul>
    )
}

export default DogSection 