import React from "react"

const DogTile = (props) => {
  let shameStatus

  if (props.dog.human === "Nick"){
    shameStatus = <p className="shame"> SHAME! SHAME! *BELL RING* </p>
  }

  return(
    <div className={`tile ${props.selectedStatus}`} id={props.dog.id} onClick={props.handleClick}>
      <h4> {props.dog.name} </h4>
      <p> {props.dog.breed} </p>
      <p> {props.dog.human} </p>
      {shameStatus}
      <img src={props.dog.image} width="300"/>
    </div>
  )
}

export default DogTile
