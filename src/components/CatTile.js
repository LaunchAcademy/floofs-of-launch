import React from "react"

const CatTile = (props) => {
  console.log(props)
  console.log(props.id)

  const handleClickCat = (event) => {
    console.log(event);
    console.log(`You pet the cat ${props.name}`);
  }

  return (
    <div className="tile">
      <li>{props.name}</li>
      <p>Personality: {props.personality}</p>
      <p>Human: {props.human}</p>
      <img src={props.image} onClick={handleClickCat} />
    </div>
  )
}

export default CatTile