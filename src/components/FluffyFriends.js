import React, { useState, Fragment } from "react"

import ChinchillaComponent from "./ChinchillaComponent"

// pass in a prob with some saying
// basic event management with alert/log
// hug the teddybear to increase hug count
// display a wholesome message if the hug count gets to 10
// toggle a friendly chinchilla to show up
// move the chinchilla to its own component
// time permitting, we can refactor teddybear into its own component too

const FluffyFriends = (props) => {

  const [hugCount, setHugCount] = useState(0)
  // const hugCountGetter = returnOfUseState[0]
  // const hugCountSetter = returnOfUseState[1]
  
  const hugBear = () => {
    const newHugCount = hugCount + 1
    setHugCount(newHugCount)
  }

  let wholesomeMessage = null
  if (hugCount >= 10) {
    wholesomeMessage = <div>Thank you for all of the hugs. Really, I'm good. Please lay off
    </div>
  }

  // we should also make a bear component ideally
  
  return (
    <div>
      <h1>{props.saying}</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROkYb-EUzzOgzBB_b0K4SaLpsefVjgRKfZMuhBTtOUlnIL6gPOC27FdMIjjklUWcQHGU3iYE&usqp=CAc"
        onClick={hugBear}
      />

      {wholesomeMessage}

      <p>Hug Count: {hugCount}</p>

      <ChinchillaComponent 
        jazzyStatus={jazzyStatus}
        setJazzyStatus={setJazzyStatus}
      />

    </div>
  )
}

export default FluffyFriends

