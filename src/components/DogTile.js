import React from 'react'

const DogTile = props => {
  
  const selectDog = () => {
    props.setSelectedDogId(props.id)
  }

  let dogClassName = "tile"
  if (props.selectedDogId === props.id){
    dogClassName += " selected"
  }
 
  return (
    <div className={dogClassName} onClick={selectDog}>
      <h1>{props.name}</h1>
      <p>{props.breed}</p>
      <p>{props.human}</p>
      <img src={props.image} width="200px" />
    </div>
  )
}

export default DogTile