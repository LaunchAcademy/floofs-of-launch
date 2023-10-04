import React, { useState } from "react"

const ChinchillaComponent = (props) => {

  const [chinchillaVisibility, setChinchillaVisibility] = useState(false)

  const toggleChinch = () => {
    setChinchillaVisibility(!chinchillaVisibility)
  }

  let chinchillaImage 
  if (chinchillaVisibility === true) {
    chinchillaImage = <img src="https://4.bp.blogspot.com/-9TSGZyRfGOo/UdzF-ATNl6I/AAAAAAAAD0Y/V7r3PoHAV8k/s400/Funny-chinchilla-Animal.jpg" />
  }

  return (
    <div>
      {chinchillaImage}

      <button onClick={toggleChinch}>
        TOGGLE JAZZY CHINCHILLA
      </button>
    </div>
  )
}

export default ChinchillaComponent
