import React from "react"
//import logo from "./logo.svg"
import "./App.scss"
import { Switch, Route } from "react-router-dom"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import Dashboard from "./Pages/dashboard/dashboard.page"
import Navigation from "./Components/navigation/navigation.component"
import Header from "./Components/header/header.component"
import AddNotePage from "./Pages/add-note/add-note.page"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      }
      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Navigation currentUser={this.state.currentUser} />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/add-note" component={AddNotePage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
