import React, { useState} from 'react'

const DogTile = props => {

  // const [favoriteStatus, setFavorite] = useState(false)

  // const favoriteDog = () => {
  //   props.setFavoriteDogId(props.dogId);
  // }

  const favoriteWrapperFunction = () => {
    props.favoriteDog(props.dogId)
  }

  let favoriteClassName = ""
  if (props.showFavoriteBackground === true){
    favoriteClassName = "selected"
  }

    return (
      <div className={`tile ${favoriteClassName}`} onClick={favoriteWrapperFunction}>

        <h1>{props.dog.name}</h1>
        <p>{props.dog.breed}</p>
        <p>{props.dog.human}</p>
        <img src={props.dog.image} width="200px" />
      </div>
    );
}

export default DogTile