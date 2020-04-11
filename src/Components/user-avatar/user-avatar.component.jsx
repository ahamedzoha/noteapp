import React from "react"
import "./user-avatar.styles.scss"

const UserAvatar = ({ currentUser }) => {
  return (
    <div className="user-avatar">
      <p>{currentUser.displayName}</p>
      <img
        className="avatar"
        src="https://robohash.org/avatar.png"
        alt="logo"
      />
    </div>
  )
}

export default UserAvatar
