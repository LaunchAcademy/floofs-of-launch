import React from 'react'
import CatTile from '../components/CatTile'

const CatContainer = (props) => {
  const [selectedCat, setSelectedCat] = React.useState(null)

  const setSelectedCatClosure = (event) => {
    if (selectedCat == event.currentTarget.id){
      setSelectedCat(null)
    } else {
      setSelectedCat(event.currentTarget.id)
    }
  }

  const catTiles = props.cats.map(cat => {
    let selectedStatus
    if(cat.id != selectedCat){
      selectedStatus = "false"
    } else {
      selectedStatus = "selected"
    }

    return <CatTile
      cat={cat}
      key={cat.id}
      handleClick={setSelectedCatClosure}
      selectedStatus={selectedStatus}
    />;
  });

  return(
    <div>
    <h2>This is Cat Container</h2>
    {catTiles}
    </div>
  )
}

export default CatContainer
