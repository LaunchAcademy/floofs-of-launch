import React, { useState } from 'react'

import ChinchillaComponent from "./ChinchillaComponent"

// basic event management 
// hug the teddybear 
// toggle a friendly chinchilla to show up
// move the chinchilla to its own component 
// time permitting, we can refactor teddybear into its own component too

const FluffyFriends = props => {
  const [hugState, changeHugState] = useState(0)

  const [chinchillaVisibility, setChinchillaVisibility] = useState(true)

  const increaseHugs = () => {
    console.log("bear was hugged")

    changeHugState(hugState + 1)
  }


  const wholesomeMessage = () => {
    console.log("Stuffed animals have feelings too <3")
  }

  const chinchillaToggle = () => {
    // if (chinchillaVisibility === true){
    //   setChinchillaVisibility(false)
    // } else {
    //   setChinchillaVisibility(true)
    // }
    setChinchillaVisibility(!chinchillaVisibility)
  }

  return (
    <div>
      <h1 onClick={wholesomeMessage}> 
        {props.saying} 
      </h1>

      <img 
        onClick={increaseHugs}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROkYb-EUzzOgzBB_b0K4SaLpsefVjgRKfZMuhBTtOUlnIL6gPOC27FdMIjjklUWcQHGU3iYE&usqp=CAc"
      />

      <p>Hug Count: {hugState}</p>


      <ChinchillaComponent 
        chinchillaToggle={chinchillaToggle}
        chinchillaVisibility={chinchillaVisibility}
      />


    </div>
  )
}


export default FluffyFriends

