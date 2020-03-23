import React from "react"

const CatTile = (props) => {

  return(
    <div className="tile">
      <h3> {props.catInfo.name} </h3>
      <p> Personality: {props.catInfo.personality} </p>
      <p> Human: {props.catInfo.human} </p>

      <img src={props.catInfo.image}></img>
    </div>
  )
}

export default CatTile
