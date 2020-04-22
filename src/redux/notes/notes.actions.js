export const addNote = (note) => ({
  type: "ADD_NOTE",
  payload: note,
})

export const removeNote = (note) => ({
  type: "REMOVE_NOTE",
  payload: note,
})
