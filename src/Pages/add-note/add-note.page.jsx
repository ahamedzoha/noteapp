import React from "react"
import "./add-note-page.styles.scss"

export default class AddNotePage extends React.Component {
  constructor() {
    super()

    this.state = {
      category: "",
      id: "",
      title: "",
      body: ""
    }
  }

  render() {
    return (
      <div className="page-container">
        <h1>Add your Notes</h1>

        <form action="">
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    )
  }
}
