import React from "react"
import CatTile from "./CatTile"

const App = (props) => {
  // console.log(props.dataPassedFromMain.cats)

  const catsArray = props.dataPassedFromMain.cats

  // const mappedCats = catsArray.map((cat) => {
  //   console.log(cat)
  //   return (
  //     <li key={cat.id}>
  //       {cat.name}
  //     </li>
  //   )
  // })

  const mappedCats = catsArray.map((cat) => {
    return (
      <CatTile
        key={cat.id}
        name={cat.name} 
        personality={cat.personality}
        human={cat.human}
        image={cat.image}
        id={cat.id}
      />
    )
  })

  return (
    <div className="app">
      <h1>Place Fluffballs here</h1>
      <div className="container">{mappedCats}</div>
    </div>
  )
}

export default App
