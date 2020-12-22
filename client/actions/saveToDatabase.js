// probably needs to be refactoredwhen I get to that section

const saveToDatabaseAction = (userData) => ({
  type: 'Save to database',
  payload: userData
})

export default saveToDatabaseAction;