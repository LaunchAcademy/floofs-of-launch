import React from "react"

const DogTile = (props) => {

    return (
        <div onClick={handleClick} className="callout">
            <h3>{props.name}</h3>
            <p>{props.breed}</p>
            <p>{props.human}</p>
            <img src={props.image} />
        </div>
    )
}

export default DogTile
