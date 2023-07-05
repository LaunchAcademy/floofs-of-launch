import React from 'react'

const CatTile = (props) => {

  const meowFunction = () => {
    props.changeSelectedCatId(props.catData.id)
  }

  let catClassName = ""
  if (props.selectedCatId === props.catData.id) {
      catClassName = "selected"
  }

  return (
    <div className={`tile ${catClassName}`}>
      <h1>{props.catData.name}</h1>
      <p>Personality: {props.catData.personality}</p>
      <p>Human: {props.catData.human}</p>
      <img width="250" src={props.catData.image} onClick={meowFunction}/>
    </div>
  )

}

export default CatTile
