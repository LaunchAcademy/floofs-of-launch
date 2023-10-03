import React from 'react';

const CatTile = (props) => {
  // console.log(props);
  const petTheCat = () => {
    console.log("you pet the cat!");
    // alert(`You pet the cat ${props.name}`)
  }

  return (
    <div className='tile'>
      <h3>{props.name}</h3>
      <p>{props.human}</p>
      <p>{props.personality}</p>
      <img onClick={petTheCat} alt={props.name} src={props.image} />
    </div>
  )
}

export default CatTile