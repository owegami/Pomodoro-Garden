import initialState from './../../store/initialState.js';

const isResetReducer = (state = false, action) => {
  if (action.type === 'isResetAction') {
    return action.payload;
  }
  return state;
}

export default isResetReducer;
