import React, { useState } from "react"
import ChinchillaComponent from "./ChinchillaComponent"

// basic event management with alert/log
// hug the teddybear to increase hug count
// display a wholesome message if the hug count gets to 10
// toggle a friendly chinchilla to show up
// move the chinchilla to its own component
// time permitting, we can refactor teddybear into its own component too

const FluffyFriends = (props) => {
  // const stateArray = useState(0)
  // const hugCount = stateArray[0]
  // const changeHugCount = stateArray[1]

  const [hugCount, changeHugCount] = useState(0)

  const hugBear = () => {
    changeHugCount(hugCount + 1)
  }
  
  let wholesomeMessage
  if (hugCount > 9){
    wholesomeMessage = "you are a good person thank you"
  }

  const [chinchillaVisibility, changeChinchillaVisibility] = useState(true)

  const toggleJazz = () => {
    changeChinchillaVisibility(!chinchillaVisibility)
  }

  return (
    <div>
      <h1>{props.saying}</h1>

      <button onClick={toggleJazz}>
        TOGGLE JAZZ
      </button>

      <img
        onClick={hugBear}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROkYb-EUzzOgzBB_b0K4SaLpsefVjgRKfZMuhBTtOUlnIL6gPOC27FdMIjjklUWcQHGU3iYE&usqp=CAc"
      />

      {wholesomeMessage}

      <p>Hug Count: {hugCount}</p>

      <ChinchillaComponent />

    </div>
  )
}

export default FluffyFriends

