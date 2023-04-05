import React from "react"

const ChinchillaComponent = (props) => {
  
  let chinchillaImage = <img src="https://4.bp.blogspot.com/-9TSGZyRfGOo/UdzF-ATNl6I/AAAAAAAAD0Y/V7r3PoHAV8k/s400/Funny-chinchilla-Animal.jpg" />


  return (
    <div>
      {chinchillaImage}

      <button>
        TOGGLE JAZZ
      </button>
    </div>
  )
}

export default ChinchillaComponent
