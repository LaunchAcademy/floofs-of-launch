import React, { useState } from "react"

const MagicalChinchilla = (props) => {

    const [chinchillaVisibility, setChinchillaVisibility] = useState(true)

    let chinchillaImageTag = (
        <img src="https://4.bp.blogspot.com/-9TSGZyRfGOo/UdzF-ATNl6I/AAAAAAAAD0Y/V7r3PoHAV8k/s400/Funny-chinchilla-Animal.jpg" />
    )

    if (chinchillaVisibility === false) {
        chinchillaImageTag = null
    }

    const toggleChinchillaVisibility = () => {
        setChinchillaVisibility(!chinchillaVisibility)
    }

    return(
        <div className="tile">
            {chinchillaImageTag}

            <button className="button" onClick={toggleChinchillaVisibility}>
                Abra-cadabra
            </button>
        </div>
    )
}   

export default MagicalChinchilla