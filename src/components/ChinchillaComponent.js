import React from "react"

const ChinchillaComponent = (props) => {

  let chinchillaImage

  if (props.chinchillaVisibility === true) {
    chinchillaImage =
      <img
        src="https://d2h1pu99sxkfvn.cloudfront.net/b0/14797159/530976365_gNdlt9yw5E/P0.jpg"
      />
  }
  return(
    <div>
      <h2 onClick={props.clickChinchilla}>Toggle Chinchilla</h2>

      {chinchillaImage}
    </div>
  )
}

export default ChinchillaComponent