import React from "react"

const CatTile = (props) => {
  return(
    <div className="tile">
      <p> Name: {props.catObjectData.name } </p>
      <p>Personality: {props.catObjectData.personality} </p>
      <p>Human: {props.catObjectData.human} </p>
      <img src={props.catObjectData.image}></img>

    </div>
  )
}

export default CatTile

