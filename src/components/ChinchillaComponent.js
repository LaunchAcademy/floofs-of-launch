import React, { useState } from "react"

const ChinchillaComponent = (props) => {

  const [chinchillaVisibility, changeChinchillaVisibility] =  useState(true)
  
  const toggleJazz = () => {
    changeChinchillaVisibility(!chinchillaVisibility)
  }
  
  let chinchillaImage = <img src="https://4.bp.blogspot.com/-9TSGZyRfGOo/UdzF-ATNl6I/AAAAAAAAD0Y/V7r3PoHAV8k/s400/Funny-chinchilla-Animal.jpg" />
  if (chinchillaVisibility === false){
    chinchillaImage = ""
  }
  

  return (
    <div>
      {chinchillaImage}

      <button onClick={toggleJazz}>
        TOGGLE JAZZ
      </button>
    </div>
  )
}

export default ChinchillaComponent
