import initialState from './../../store/initialState.js';

const haveServerMessageReducer = (state = initialState.haveServerMessage, action) => {
  if (action.type === 'haveServerMessageAction') {
    return action.payload;
  }
  return state;
}

export default haveServerMessageReducer;
