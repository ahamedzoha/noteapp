import React from "react"
import { Link } from "react-router-dom"
import "./navigation.styles.scss"
import { auth } from "../../firebase/firebase.utils"

const Navigation = ({ currentUser }) => {
  return (
    <div className="navigation-container">
      <Link className="option" to="/">
        All Notes
      </Link>
      <Link className="option" to="/add-note">
        Add Note
      </Link>
      {currentUser ? (
        <Link className="option" onClick={() => auth.signOut()}>
          Sign Out
        </Link>
      ) : null}

      <p className="credits">Created by Azaz Ahamed | 2020</p>
    </div>
  )
}

export default Navigation
