import initialState from './../../store/initialState.js';

const serverResponseMessageReducer = (state = null, action) => {
  if (action.type === 'serverResponseMessageAction') {
    return action.payload;
  }
  return state;
}

export default serverResponseMessageReducer;
