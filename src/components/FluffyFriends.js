import React, { useState } from "react"
import ChinchillaComponent from "./ChinchillaComponent"

// basic event management with alert/log
// hug the teddybear to increase hug count
// display a wholesome message if the hug count gets to 10
// toggle a friendly chinchilla to show up with a JaZzY button
// move the chinchilla to its own component
// time permitting, we can refactor teddybear into its own component too

const FluffyFriends = (props) => {
  
  const [hugCount, changeHugCount] = useState(0)

  const triggerWhenClicked = () => {
    changeHugCount(hugCount + 1)
  }

  let bobIsContent 
  if (hugCount >= 10){
    bobIsContent = "Aw gee thanks y'all"
  }

  // let chinchilla
  // if (chinchillaVisibility === true) {
  //   chinchilla = <ChinchillaComponent />
  // }
 
  return (
    <div>
      <h1>This bear needs encouragement....</h1>
      <h3>{props.saying}</h3>

      <img
        onClick={triggerWhenClicked}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROkYb-EUzzOgzBB_b0K4SaLpsefVjgRKfZMuhBTtOUlnIL6gPOC27FdMIjjklUWcQHGU3iYE&usqp=CAc"
      />

      {bobIsContent}

      <h3> Hug Count: {hugCount} </h3>

      <ChinchillaComponent />
    </div>
  )
}

export default FluffyFriends

