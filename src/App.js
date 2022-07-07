import React from "react";
import List from "./Tz/List"
import Years from "./Tz/Years";
import Books from "./Tz/Books";

function App() {

  let years = [
    {id:1, completed: false, title: '2020'},
    {id:2, completed: false, title: '2019'},
    {id:3, completed: false, title: '2018'}
  ]

  return (
    <div className="wrapper">
    <h1>Рекомендуемая книга</h1>

    <List years={years} />
    </div>
  )
}

export default App;
