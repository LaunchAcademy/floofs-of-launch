import React from 'react'

const TeddyBear = props => {

  const teddyAlert = (convenientlyPassedEventObject) => {

    console.log(convenientlyPassedEventObject)

    alert("I wait for you when you leave the room.")
  }


  return (
    <div>
      <h1 onClick={teddyAlert} >{props.saying}</h1>
    </div>
  )
}


export default TeddyBear

