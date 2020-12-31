import initialState from './../../store/initialState.js';

const saveToDatabaseReducer = (state = initialState.saveToDatabase, action) => {
  if (action.type === 'saveToDatabaseAction') {
    return action.payload;
  }
  return state;
}

export default saveToDatabaseReducer;
