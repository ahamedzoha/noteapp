import React from "react"
import { Link } from "react-router-dom"
import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Link className="option" to="/">
        All Notes
      </Link>
      <Link className="option" to="/add-note">
        Add Note
      </Link>
      <Link className="option" to="/sign-out">
        Sign Out
      </Link>

      <p className="credits">Created by Azaz Ahamed | 2020</p>
    </div>
  )
}

export default Navigation
