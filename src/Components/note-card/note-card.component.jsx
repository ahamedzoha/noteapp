import React from "react"
import "./note-card.styles.scss"
import CustomButton from "../custom-button/custom-button.component"

const NoteCard = ({ category, title, body }) => {
  return (
    <div className="note-card">
      <h5>{category}</h5>
      <h1>{title}</h1>
      <p>{body.length < 111 ? body : body.substr(1, 111) + "..."}</p>
      {/* <p>{body}</p> */}
      <CustomButton>Button</CustomButton>
    </div>
  )
}

export default NoteCard
