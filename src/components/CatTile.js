import React from "react"

const CatTile = (props) => {

  const handleSelectCat = () => {
    props.setBestCatId(props.cat.id)
  }

  let floofClass 
  if (props.bestCatId === props.cat.id){
    floofClass = "bestest-floof"
  }

  return (
    <div className={`callout tile ${floofClass}`} onClick={handleSelectCat}>
      <p>I am a cat! My name is {props.cat.name}</p>
      <p>My personality type is {props.cat.personality}</p>
      <img src={props.cat.image} width="35%" />
    </div>
  )
}

export default CatTile