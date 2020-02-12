import React, {useState} from 'react'
import DogTile from '../components/DogTile'

const DogContainer = props => {
  const [selectedDog, setSelectedDog] = useState(null)

  const setSelectedDogClosure = (event) => {
      if(selectedDog == event.currentTarget.id) {
        setSelectedDog(null)}
      else {
        setSelectedDog(event.currentTarget.id)
      }
    }

  const dogTiles = props.dogs.map(dog => {
    let selectedStatus
    if(dog.id != selectedDog){
      selectedStatus = "false"
    } else {
      selectedStatus = "selected"
    }

    return <DogTile
              key={dog.id}
              dog={dog}
              handleClick={setSelectedDogClosure}
              selectedStatus={selectedStatus}
            />;
  });

  return(
    <div>
    <h2>This is a Dog Container</h2>
    {dogTiles}
    </div>
  )
}

export default DogContainer
