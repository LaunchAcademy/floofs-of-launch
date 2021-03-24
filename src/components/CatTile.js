import React from 'react'

const CatTile = (props) => {

// this creates a variable that stores a class which you add to the className in the div 
  let classes = "container"
  // if the selected status is true, then we append the class background-change to the class variable
  if (props.selectedStatus === true) {
    classes += " background-change"
  }


  return (
    <div className={classes} onClick={props.handleClick}>
      <h1>{props.name}</h1>
      <p>{props.personality}</p>
      <p>{props.human}</p>
      <img src={props.image} width="200px" />
    </div>
  )
}

export default CatTile