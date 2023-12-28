import React from "react"
  
const CatTile = (props) => {
  // console.log(props)

  const handleClick = (event) => {
    
    console.log(`${props.catObject.name} got BOOPED`)
  }
  
  return (
    <div>
      <h3>{props.catObject.name} owns {props.catObject.human}</h3>
      <p>{props.catObject.personality}</p>
      <img onClick={handleClick} src={props.catObject.image} />
    </div>
  )
}

export default CatTile