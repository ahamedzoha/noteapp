import React from "react"
import "./header.styles.scss"
const Header = () => {
  return (
    <div className="header-container">
      <h1 className="logotext">SimplyNote</h1>

      <div className="user-avatar">
        <p>Azaz Ahamed</p>
        <img
          className="avatar"
          src="https://robohash.org/avatar.png"
          alt="logo"
        />
      </div>
    </div>
  )
}

export default Header
