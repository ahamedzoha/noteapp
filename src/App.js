import React from "react"
//import logo from "./logo.svg"
import "./App.scss"
import { Switch, Route } from "react-router-dom"

import Dashboard from "./Pages/dashboard/dashboard.page"
import Navigation from "./Components/navigation/navigation.component"
import Header from "./Components/header/header.component"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/add-note" />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
