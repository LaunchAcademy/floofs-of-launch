import React from "react"

const ChinchillaComponent = (props) => {

  let chinchillaElement = null
  if (props.chinchillaVisibility === true) {
    chinchillaElement = <img
      src="https://4.bp.blogspot.com/-9TSGZyRfGOo/UdzF-ATNl6I/AAAAAAAAD0Y/V7r3PoHAV8k/s400/Funny-chinchilla-Animal.jpg"
    />
  }

  return(
    <div>
      {chinchillaElement}

      <button onClick={props.chinchillaToggle}>
        Abra-kadabra
      </button>

    </div>
  )
}

export default ChinchillaComponent