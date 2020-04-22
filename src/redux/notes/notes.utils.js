export const addNote = (notes, toAdd) => {
  notes.forEach((note) => (note.id = note.id + 1))
  toAdd.id = 1
  notes.unshift(toAdd)
}

export const removeNote = (notes, toRemove) => {
  const arr = notes.filter((note) => note.id !== toRemove.id)
  console.log(arr)
  return arr
}
