import React from "react"
import { Switch, Route } from "react-router-dom"
import "./private-route.styles.scss"

import Dashboard from "../../Pages/dashboard/dashboard.page"
import Navigation from "../navigation/navigation.component"
import Header from "../header/header.component"
import AddNotePage from "../../Pages/add-note/add-note.page"

const PrivateRoute = ({ currentUser }) => {
  return (
    <div className="private-route">
      <Header currentUser={currentUser} />
      <Navigation currentUser={currentUser} />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/add-note" component={AddNotePage} />
        </Switch>
      </div>
    </div>
  )
}

export default PrivateRoute
