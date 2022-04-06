import React, { useState } from "react"

import ChinchillaComponent from "./ChinchillaComponent"

// basic event management
// hug the teddybear
// toggle a friendly chinchilla to show up
// move the chinchilla to its own component
// time permitting, we can refactor teddybear into its own component too

const FluffyFriends = (props) => {
  const [hugCount, setHugCount] = useState(0)
  // console.log(hugCount);

  const [showChinchilla, setShowChinchilla] = useState(true)
  // console.log(showChinchilla)

  const wholesomeMessage = () => {
    console.log("Stuffed animals have feelings too <3")
  }

  const handleHugCount = () => {
    setHugCount(hugCount + 1)
    // if (hugCount === 10) {
    //   setHugCount(0)
    // } else {
    //   setHugCount(hugCount + 1)
    // }
  }
  let specialMessage = ""
  if (hugCount === 10) {
    specialMessage = "I love you too!"
  }

  const toggleChinchilla = () => {
    console.log("I was clicked!")
    // setShowChinchilla(false)
    
    // if (showChinchilla === true) {
    //   setShowChinchilla(false)
    // } else {
    //   setShowChinchilla(true)
    // }
    
    setShowChinchilla(!showChinchilla)
  }

  let chinchillaImage = (
    <img src="https://4.bp.blogspot.com/-9TSGZyRfGOo/UdzF-ATNl6I/AAAAAAAAD0Y/V7r3PoHAV8k/s400/Funny-chinchilla-Animal.jpg" />
  )

  if (showChinchilla === false) {
    console.log("changing image");
    chinchillaImage = ""
  }

  return (
    <div>
      <h1 onClick={wholesomeMessage}>{props.saying}</h1>

      <img
        onClick={handleHugCount}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROkYb-EUzzOgzBB_b0K4SaLpsefVjgRKfZMuhBTtOUlnIL6gPOC27FdMIjjklUWcQHGU3iYE&usqp=CAc"
      />
      {specialMessage}

      <p>Hug Count: {hugCount}</p>

      <ChinchillaComponent 
        toggleChinchilla={toggleChinchilla}
        showChinchilla={showChinchilla}
      />
    </div>
  )
}

export default FluffyFriends
