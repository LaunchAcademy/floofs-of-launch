import React, { useState } from "react"

// import ChinchillaComponent from "./ChinchillaComponent"

// basic event management with alert/log
// hug the teddybear to increase hug count
// display a wholesome message if the hug count gets to 10
// toggle a friendly chinchilla to show up with a JaZzY button

// move the chinchilla to its own component
// time permitting, we can refactor teddybear into its own component too


const FluffyFriends = (props) => {

  const [hugCount, changeHugCount] = useState(0)

  const hugBob = () => {
    changeHugCount(hugCount + 1)  
  }

  let pictureToDisplay = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROkYb-EUzzOgzBB_b0K4SaLpsefVjgRKfZMuhBTtOUlnIL6gPOC27FdMIjjklUWcQHGU3iYE&usqp=CAc"
  if (hugCount >= 10){
    pictureToDisplay = "https://static.wikia.nocookie.net/muppet/images/5/5b/Character.bear.jpg"
  }

  const [playJazz, setPlayJazz] = useState(false)

  let chinchillaElement = ""
  if (playJazz === true){
    chinchillaElement = <img src="https://4.bp.blogspot.com/-9TSGZyRfGOo/UdzF-ATNl6I/AAAAAAAAD0Y/V7r3PoHAV8k/s400/Funny-chinchilla-Animal.jpg" />
  }

  const toggleJazz = () => {
    // if (playJazz === true){
    //   setPlayJazz(false)
    // } else {
    //   setPlayJazz(true)
    // }
    setPlayJazz(!playJazz)
  }

  return (
    <div className="app">
      <h1>
        This bear needs encouragement....
      </h1>

      <img
        src={pictureToDisplay}
        onClick={hugBob}
      />

      <h3>Number of hugs: {hugCount} </h3>

      <button onClick={toggleJazz}>
        Toggle Jazz Chinchilla
      </button>
      {chinchillaElement}
    </div>
  )
}

export default FluffyFriends

