import React, { useState } from "react";
import FloofTile from "./FloofTile";

const FloofSection = props => {
  
  const [favoriteFloofId, setFavoriteFloofId] = useState(null)
  let floofs = props.floofs.map(floof => {
      
    let handleClick = () => {
      if (favoriteFloofId === floof.id) {
        setFavoriteFloofId(null)
      } else {
        setFavoriteFloofId(floof.id)
      }
    }

    let selected = false
    if (floof.id === favoriteFloofId) {
      selected = true
    }

    return(
      <FloofTile
        key={floof.id}
        floof={floof}
        handleClick={handleClick}
        selected={selected}
      />
    )
  });

  return (
    <div className="container">
      <h2>{`${props.floofType}Floofs`} </h2>
      {floofs}
    </div>
  );
};

export default FloofSection;
