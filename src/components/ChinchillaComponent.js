import React from "react"

const ChinchillaComponent = (props) => {
  let image = (
    <img src="https://4.bp.blogspot.com/-9TSGZyRfGOo/UdzF-ATNl6I/AAAAAAAAD0Y/V7r3PoHAV8k/s400/Funny-chinchilla-Animal.jpg" />
  )

  if (props.showChinchilla === false) {
    image = ""
  }

  return (
    <div>
      {image}
      
      <button onClick={props.toggleChinchilla}>Abra-kadabra</button>
    </div>
  )
}

export default ChinchillaComponent
