import React from "react";
import FloofTile from "./FloofTile";

const FloofSection = props => {
  let floofs = props.floofs.map(floof => {
    return(
      <FloofTile
        key={floof.id}
        floof={floof}
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
