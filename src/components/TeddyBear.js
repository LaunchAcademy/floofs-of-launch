import React, { useState } from 'react'

import ChinchillaComponent from "./ChinchillaComponent"

const TeddyBear = props => {

  const [hugCount, setHugCount] = useState(0)

  const [chinchillaVisibility, toggleChinchillaVisibility ] = useState(false)

  const hugBear = () => {
    const newHugCount = hugCount + 1
    setHugCount(newHugCount)
  }

  const toggleChinchilla = () => {
    if (chinchillaVisibility === true){
      return toggleChinchillaVisibility(false)
    } else {
      return toggleChinchillaVisibility(true)
    }
  }

  const teddyAlert = (convenientlyPassedEventObject) => {
    alert("I wait for you when you leave the room.")
  }

  return (
    <div>
      <h1 onClick={teddyAlert} >{props.saying}</h1>

      <img 
        onClick={hugBear}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROkYb-EUzzOgzBB_b0K4SaLpsefVjgRKfZMuhBTtOUlnIL6gPOC27FdMIjjklUWcQHGU3iYE&usqp=CAc"
      />

      <p>Hug Count: {hugCount}</p>


      <ChinchillaComponent 
        chinchillaVisibility={chinchillaVisibility}
        clickChinchilla={toggleChinchilla}
      />
    </div>
  )
}


export default TeddyBear

