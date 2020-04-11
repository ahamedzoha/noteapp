import React from "react"
import "./header.styles.scss"
import UserAvatar from "../user-avatar/user-avatar.component"

const Header = ({ currentUser }) => {
  return (
    <div className="header-container">
      <h1 className="logotext">SimplyNote</h1>

      <UserAvatar currentUser={currentUser} />
    </div>
  )
}

export default Header
