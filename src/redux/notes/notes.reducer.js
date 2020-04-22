import notesdata from "../../sample-data"
import { addNote, removeNote } from "./notes.utils"
const INITIAL_STATE = {
  data: notesdata,
}

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        state: addNote(state.data, action.payload),
      }
    case "REMOVE_NOTE":
      return {
        ...state,
        state: removeNote(state.data, action.payload),
      }

    default:
      return state
  }
}

export default notesReducer
