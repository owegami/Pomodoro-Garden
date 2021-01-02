import initialState from './../../store/initialState.js';

const haveServerMessageReducer = (state = false, action) => {
  if (action.type === 'haveServerMessageAction') {
    return action.payload;
  }
  return state;
}

export default haveServerMessageReducer;
