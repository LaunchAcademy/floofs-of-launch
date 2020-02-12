import React from "react";

const FloofTile = props => {
  let details = "";
  if (props.floof.breed) {
    details = props.floof.breed;
  } else {
    details = props.floof.personality;
  }

  return (
    <div className="tile">
      <h3>
        {props.floof.name} ({props.floof.human})
      </h3>
      <p>
        <i> {details} </i>
      </p>
      <img src={props.floof.image} />
    </div>
  );
};

export default FloofTile;
