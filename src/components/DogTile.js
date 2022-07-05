import React from "react"

const DogTile = (props) => {

    return(
        <div className="tile" onClick={props.petFunction}>
            <h1>{props.name}</h1>
            <h2>Breed: {props.breed}</h2>
            <h3>Human: {props.human}</h3>
            <img src={props.image} />
        </div>
    )
}

export default DogTile