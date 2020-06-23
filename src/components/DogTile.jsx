import React from "react"

const DogTile = (props) => {

  const alertYo = (event) => {
    if(props.dogObjectData.human == "Nick"){
      return alert("you are a silly billy, that ain't your dog!")
    } else {
      return alert(`yo ${props.dogObjectData.name}`)
    }
  }



  return(
    <div className="tile" onClick={alertYo}>
      <p> Name:{props.dogObjectData.name}</p>
      <p> Breed: {props.dogObjectData.breed}</p>
      <p> Human: {props.dogObjectData.human}</p>
      <img src={props.dogObjectData.image} />
    </div>
  )
}

export default DogTile