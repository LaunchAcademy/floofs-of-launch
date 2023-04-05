import React from 'react'

const DogTile = (props) => {

  const clickDog = () => {
    alert(`You hugged: ${props.dogName}`)
  }

  return (
    <div className="tile" onClick={clickDog}>
      <h3>{props.dogName}</h3>
      <p>Breed: {props.breed}</p>
      <p>Human: {props.human}</p>
      <img width="300" src={props.image}/>
    </div>
  )

}

export default DogTile
