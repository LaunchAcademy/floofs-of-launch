import React from "react";
import data from "../constants/data";
import DogContainer from "../containers/DogContainer"
import CatContainer from "../containers/CatContainer"

// import DogTile from "./DogTile";
// import CatTile from "./CatTile";

const App = props => {
  // let dogTiles = [];
  // data.dogs.forEach(dog => {
  //   dogTiles.push(<DogTile dog={dog} />);
  // });



  return (
    <div className="app">
      <h1>Floofs of Launch</h1>
      <DogContainer dogs={data.dogs}/>
      <CatContainer cats ={data.cats}/>
    </div>
  );
};

export default App;
