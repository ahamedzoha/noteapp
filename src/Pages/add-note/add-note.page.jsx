import React from "react"
import "./add-note-page.styles.scss"

export default class AddNotePage extends React.Component {
  constructor() {
    super()

    this.state = {
      category: "Home",
      title: "",
      body: ""
    }
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      category: "",
      title: "",
      body: ""
    })
  }

  render() {
    return (
      <div className="page-container">
        <h1>Add your Notes</h1>

        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <label>Select Category</label>

          <select onChange={this.handleChange} name="category">
            <option value="Home">Home</option>
            <option value="School">School</option>
            <option value="Office">Office</option>
            <option value="Other">Other</option>
          </select>

          <label>Add Title...</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <label>Note Description</label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Add Note</button>
        </form>
      </div>
    )
  }
}
