import React from "react"
import "./dashboard.styles.scss"

import NoteCard from "../../Components/note-card/note-card.component"
import { connect } from "react-redux"

const Dashboard = ({ notes }) => {
  // constructor() {
  //   super()

  //   this.state = {
  //     notes: notesdata,
  //   }
  // }

  // const { notes } = this.state

  return (
    <div className="dashboard-container">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          category={note.category}
          title={note.title}
          body={note.body}
        />
      ))}
    </div>
  )
}

const mapStateToProps = ({ notes }) => ({
  notes: notes,
})

export default connect(mapStateToProps)(Dashboard)
