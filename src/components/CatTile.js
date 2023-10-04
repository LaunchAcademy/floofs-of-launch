import React from 'react';

const CatTile = (props) => {

  const favoriteTheCat = () => {
    props.setFavoritedCatId(props.id)
  }

  let selectedStatusCSS 
  if (props.favoritedCatId === props.id) {
    selectedStatusCSS = "bestest-floof"
  }

  return (
    <div className={`tile ${selectedStatusCSS}`}>
      <h3>{props.name}</h3>
      <p>{props.human}</p>
      <p>{props.personality}</p>
      <img onClick={favoriteTheCat} alt={props.name} src={props.image} />
    </div>
  )
}

export default CatTile