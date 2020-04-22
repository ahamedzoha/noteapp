import React from "react"
import "./App.scss"
import { Route, Switch, Redirect } from "react-router-dom"

import { connect } from "react-redux"
import { setCurrentuser } from "./redux/user/user.actions"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import PrivateRoute from "./Components/private-route/private-route.component"
import LoginSignUp from "./Pages/login-signup/login-signup.page"

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentuser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentuser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }
      setCurrentuser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        {this.props.currentUser ? (
          <PrivateRoute currentUser={this.props.currentUser} />
        ) : (
          <LoginSignUp />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentuser: (user) => dispatch(setCurrentuser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
