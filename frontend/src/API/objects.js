export const getObjectField = (obj, field) => {
  const result = []

  obj.forEach(element => {
    result.push(element[field])
  })

  return result
}

export const elementsByOtherObjectField = (originalObj, objToCheck, field) => {
  const result = originalObj.filter(element => objToCheck.includes(element[field]))

  return result
}