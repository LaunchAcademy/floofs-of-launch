import React, { useState } from "react"

import CatTile from "./CatTile"

const CatSection = (props) => {
    const [selectedCatId, changeSelectedCatId] = useState(null)

    const catsArray = props.catsData.map((cat) => {
        return (
            <CatTile
                name={cat.name}
                personality={cat.personality}
                human={cat.human}
                image={cat.image}
                key={cat.id}
                id={cat.id}
                selectedCatId={selectedCatId}
                changeSelectedCatId={changeSelectedCatId}
            />
        )
    })

    return (
        <div>
            <h2>Cats: </h2>
            {catsArray}
        </div>
    )
}

export default CatSection