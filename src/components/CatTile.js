import React from "react"

const CatTile = (props) => {

    return(
        <div>
            <h1>{props.name}</h1>
            <h3>Human: {props.human}</h3>
            <p>Personality: {props.personality}</p>
            <img src={props.image}/>
        </div>
    )
}

export default CatTile 