import React from "react"
import logo from "./logo.svg"
import "./App.scss"
import { Switch, Route } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact
          <Route exact path="/add_note" />
        </Switch>
      </div>
    )
  }
}

export default App
