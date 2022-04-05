import React from 'react';

import DogTile from './DogTile';

const App = props => {

  const dogResponse = fetch("/dogs")

  const dogComponentArray = props.data.dogs.map((dogData) => {
    console.log(dogData)
    return <DogTile dogObject={dogData} />;
  })

  return (
    <div>
      {dogComponentArray}
    </div>
  );
}

export default App;