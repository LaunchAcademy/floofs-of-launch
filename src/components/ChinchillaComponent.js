import React, { useState } from "react"

const ChinchillaComponent = (props) => {
  const [jazzyStatus, setJazzyStatus] = useState(false)

  let chinchillaImage = null
  if (props.jazzyStatus === true){
    chinchillaImage = <img src="https://4.bp.blogspot.com/-9TSGZyRfGOo/UdzF-ATNl6I/AAAAAAAAD0Y/V7r3PoHAV8k/s400/Funny-chinchilla-Animal.jpg" />
  }

  const clickToChangeJazz = () => {
    props.setJazzyStatus(!props.jazzyStatus)
  }

  return (
    <div>
      {chinchillaImage}

      <button onClick={clickToChangeJazz}>
        TOGGLE JAZZ
      </button>
    </div>
  )
}

export default ChinchillaComponent
