import initialState from './../../store/initialState.js';

const sessionTotalReducer = (state = initialState.sessionTotal, action) => {
  if (action.type === 'sessionTotalAction') {
    return action.payload;
  }
  return state;
}

export default sessionTotalReducer;
