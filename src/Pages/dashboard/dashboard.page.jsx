import React from "react"
import "./dashboard.styles.scss"

import NoteCard from "../../Components/note-card/note-card.component"
import { connect } from "react-redux"

const Dashboard = ({ notes }) => {
  return (
    <div className="dashboard-container">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          // category={note.category}
          // title={note.title}
          // body={note.body}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  notes: state.notes.data,
})

export default connect(mapStateToProps)(Dashboard)
