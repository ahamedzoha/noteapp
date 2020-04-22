import { combineReducers } from "redux"

import userReducer from "./user/user.reducer"
import notesReducer from "./notes/notes.reducer"

export default combineReducers({
  user: userReducer,
  notes: notesReducer,
})
