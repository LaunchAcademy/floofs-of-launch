import React from "react"
// import ChinchillaComponent from "./ChinchillaComponent"

// basic event management with alert/log
// hug the teddybear to increase hug count
// display a wholesome message if the hug count gets to 10
// toggle a friendly chinchilla to show up with a JaZzY button
// move the chinchilla to its own component
// time permitting, we can refactor teddybear into its own component too

const FluffyFriends = (props) => {

  return (
    <div>
      <h1>This bear needs encouragement....</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROkYb-EUzzOgzBB_b0K4SaLpsefVjgRKfZMuhBTtOUlnIL6gPOC27FdMIjjklUWcQHGU3iYE&usqp=CAc"
      />

      <h3>Hug Count:0</h3>
    </div>
  )
}

export default FluffyFriends

