import React from "react"

const DogTile = (props) => {
  let message
  let styles = ""
  if (props.dogData.human === "AmyLynn") {
    styles = "awesome"
    message = <p>Living that van life</p>
  }

  return (
    <div className={`tile ${styles}`} onClick={props.onClickHandler}>
      <h1>{props.dogData.name}</h1>
      <p>{props.dogData.human}</p>
      <p>{props.dogData.breed}</p>
      <img src={props.dogData.image} />
      {message}
    </div>
  )
}

export default DogTile
