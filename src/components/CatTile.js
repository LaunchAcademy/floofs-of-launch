import React from 'react'

const CatTile = (props) => {

  const meowFunction = () => {
    if (props.catData.human === "Casi"){
      alert("FEED ME MATHER")
    } else {
      alert("meow")
    }
  }

  return (
    <div className="tile">
      <h1>{props.catData.name}</h1>
      <p>Personality: {props.catData.personality}</p>
      <p>Human: {props.catData.human}</p>
      <img width="250" src={props.catData.image} onClick={meowFunction}/>
    </div>
  )

}

export default CatTile

// object destructuring props