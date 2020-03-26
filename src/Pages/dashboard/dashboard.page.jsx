import React from "react"
import "./dashboard.styles.scss"

import NoteCard from "../../Components/note-card/note-card.component"
import notesdata from "../../sample-data"

class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {
      notes: notesdata,
      paginate: false
    }
  }

  render() {
    const { notes } = this.state

    return (
      <div className="dashboard-container">
        {notes.map(note => (
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
}

export default Dashboard
