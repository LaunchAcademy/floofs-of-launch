import React from "react"

import CatTile from "./CatTile"

const CatSection = (props) => {

    const catTileComponents = props.catsArray.map((catObject) => {
        return(
            <CatTile 
                name={catObject.name}
                image={catObject.image}
                human={catObject.human}
                personality={catObject.personality}
                key={catObject.id}
            />
        )
    })

    return(
        <div className="container">
            {catTileComponents}
        </div>
    )
}

export default CatSection