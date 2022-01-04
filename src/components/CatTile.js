import React from "react"

const CatTile = (props) => {
  console.log(props);
  // debugger

  // if we were to just pass the whole cat object
  {/* <li>{props.cat.name}</li> */}

  return (
    <li>{props.name}</li>
  )
}

export default CatTile