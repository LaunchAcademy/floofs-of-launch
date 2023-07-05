import React from "react"

const DogTile = (props) => {
    console.log(props)

    return(
        <div className="tile">
            <h3> {props.name} </h3>
            <p>Human: {props.human}</p>
            <p>Breed: {props.breed}</p>
            <img width="400px" src={props.image} />
        </div>
    )
}

export default DogTile