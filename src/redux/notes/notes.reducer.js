import notesdata from "../../sample-data"

const INITIAL_STATE = notesdata

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default notesReducer
