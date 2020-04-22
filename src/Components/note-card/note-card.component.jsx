import React from "react"
import "./note-card.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
import { connect } from "react-redux"
import { removeNote } from "../../redux/notes/notes.actions"

const NoteCard = ({ note, removeNote }) => {
  const { category, title, body } = note
  return (
    <div className="note-card">
      <h5>{category}</h5>
      <h1>{title}</h1>
      <p>{body.length < 111 ? body : body.substr(1, 111) + "..."}</p>
      <CustomButton card>Edit</CustomButton>
      <CustomButton card onClick={() => removeNote(note)}>
        Remove
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeNote: (note) => dispatch(removeNote(note)),
})

export default connect(null, mapDispatchToProps)(NoteCard)
