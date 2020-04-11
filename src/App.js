import React from "react"
//import logo from "./logo.svg"
import "./App.scss"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import PrivateRoute from "./Components/private-route/private-route.component"
import LoginSignUp from "./Pages/login-signup/login-signup.page"

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
        {this.state.currentUser ? (
          <PrivateRoute currentUser={this.state.currentUser} />
        ) : (
          <LoginSignUp />
        )}
      </div>
    )
  }
}

export default App
