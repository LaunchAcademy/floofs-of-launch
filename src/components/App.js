import React from "react";
import data from "../constants/data";
import DogTile from "./DogTile";
import CatTile from "./CatTile";

const App = props => {
  let dogTiles = [];
  data.dogs.forEach(dog => {
    dogTiles.push(<DogTile dog={dog} />);
  });

  const catTiles = data.cats.map(cat => {
    return <CatTile cat={cat} />;
  });

  return (
    <div className="app">
      <h1>Floofs of Launch</h1>
      {dogTiles}
      {catTiles}
    </div>
  );
};

export default App;
