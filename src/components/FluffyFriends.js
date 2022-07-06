import React, { useState } from "react"

import MagicalChinchilla from "./MagicalChinchilla"

// basic event management
// hug the teddybear
// toggle a friendly chinchilla to show up
// move the chinchilla to its own component
// time permitting, we can refactor teddybear into its own component too

const FluffyFriends = (props) => {
  // const stateArray = useState(2)
  // const currentState = stateArray[0]
  // const stateChangingFunction = stateArray[1]
  // const [currentState, stateChangingFunction] = useState(2)

  const [hugCount, setHugCount] = useState(0)
  const [chinchillaVisibility, setChinchillaVisibility] = useState(true)


  
  const hug = () => {
    setHugCount(hugCount + 1)
  }


  return (
    <div className="container">
      <h1>{props.saying}</h1>

      <img
        onClick={hug}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROkYb-EUzzOgzBB_b0K4SaLpsefVjgRKfZMuhBTtOUlnIL6gPOC27FdMIjjklUWcQHGU3iYE&usqp=CAc"
      />

      <p>Hug Count: {hugCount}</p>

    
      <MagicalChinchilla />

    </div>
  )
}

export default FluffyFriends

