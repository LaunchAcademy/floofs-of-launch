import React from "react"

const CatTile = (props) => {

  return( 
    <div>
      <h1>{props.catData.name}</h1>
      <li>
        Human: {props.catData.human}
      </li>
      <li>
        breed: {props.catData.personality}
      </li>
      <img src={props.catData.image} width="200px" />
    </div>
  )
}

export default CatTile