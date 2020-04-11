import React from "react"
import "./header.styles.scss"
import UserAvatar from "../user-avatar/user-avatar.component"
import SignIn from "../sign-in/sign-in.component"

const Header = ({ currentUser }) => {
  return (
    <div className="header-container">
      <h1 className="logotext">SimplyNote</h1>

      {currentUser ? <UserAvatar currentUser={currentUser} /> : <SignIn />}
    </div>
  )
}

export default Header
