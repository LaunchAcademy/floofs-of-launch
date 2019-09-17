import React from "react"

const CatTile = (props) => {
  let { catData, secretMessage } = props

  return(
    <div className="tile">
      <h4> {catData.name} </h4>
      <p> {catData.personality} </p>
      <p> {catData.human}</p>
      <img src={catData.image} />
      <p> {secretMessage} </p>
    </div>
  )
}

export default CatTile
