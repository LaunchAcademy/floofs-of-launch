import React, { useState } from "react"

import ChinchillaComponent from "./ChinchillaComponent"

// basic event management with alert/log
// hug the teddybear to increase hug count
// display a wholesome message if the hug count gets to 10
// toggle a friendly chinchilla to show up with a JaZzY button

// move the chinchilla to its own component
// time permitting, we can refactor teddybear into its own component too


const FluffyFriends = (props) => {

  const [hugCount, setHugCount] = useState(0)

  const hugBob = () => {
    const newHugCount = hugCount + 1
    setHugCount(newHugCount)
  }

  let wholesomeMessage = null
  
  if (hugCount >= 10) {
    wholesomeMessage = <p>Gee, I feel a lot better. Thanks y'all!</p>
  }

  const [chinchillaVisibility, setChinchillaVisibility] = useState(false)

  let chinchilla
  if (chinchillaVisibility === true) {
    chinchilla = <ChinchillaComponent />
  }

  const toggleChinchilla = () => {
    setChinchillaVisibility(!chinchillaVisibility)
  }

  return (
    <div>
      <h1>
        This bear needs encouragement....
      </h1>

      {wholesomeMessage}

      <img
        onClick={hugBob}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROkYb-EUzzOgzBB_b0K4SaLpsefVjgRKfZMuhBTtOUlnIL6gPOC27FdMIjjklUWcQHGU3iYE&usqp=CAc"
      />

      <h3>Number of hugs: {hugCount} </h3>

      <button onClick={toggleChinchilla}>
        TOGGLE JAZZ
      </button>

      {chinchilla}
    </div>
  )
}

export default FluffyFriends

