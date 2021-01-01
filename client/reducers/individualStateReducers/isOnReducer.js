import initialState from './../../store/initialState.js';

const isOnReducer = (state = false, action) => {
  if (action.type === 'isOnAction') {
    return action.payload;
  }
  return state;
}

export default isOnReducer;
