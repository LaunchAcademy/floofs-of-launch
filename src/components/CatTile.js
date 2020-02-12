import React from "react"

const CatTile = (props) => {
  // let { catData, secretMessage } = props

  return(
    <div className="tile">
      <h4> {props.cat.name} </h4>
      <p> {props.cat.personality} </p>
      <p> {props.cat.human}</p>
      <img src={props.cat.image} />
    </div>
  )
}

export default CatTile
