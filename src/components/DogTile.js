import React from 'react'

const DogTile = props => {
 
  return (
    <div className="tile">
      <h1>{props.dog.name}</h1>
      <p>{props.dog.breed}</p>
      <p>{props.dog.human}</p>
      <img src={props.dog.image} width="200px" />
    </div>
  )
}

export default DogTile