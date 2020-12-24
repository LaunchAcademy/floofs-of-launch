import React, { useState } from "react"
import FloofTile from "./FloofTile"

const FloofSection = (props) => {
  const [favoriteFloofId, setFavoriteFloofId] = useState(null)

  let floofs = props.floofs.map((floof) => {
    let selectedStatus = false
    if (favoriteFloofId === floof.id) {
      selectedStatus = true
    }
    const handleClick = () => {
      if (favoriteFloofId !== floof.id) {
        setFavoriteFloofId(floof.id)
      } else {
        setFavoriteFloofId(null)
      }
    }

    return (
      <FloofTile
        key={floof.id}
        floof={floof}
        handleClick={handleClick}
        selectedStatus={selectedStatus}
      />
    )
  })

  return (
    <div className="container">
      <h2>{`${props.floofType}Floofs`} </h2>
      {floofs}
    </div>
  )
}

export default FloofSection
