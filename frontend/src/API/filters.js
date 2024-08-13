export const removeByID = (elements, id) => {
  const
    result = elements.filter(element => element.id !== id)

  return result
}