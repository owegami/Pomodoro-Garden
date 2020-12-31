import initialState from './../../store/initialState.js';

const isResetReducer = (state = initialState.isReset, action) => {
  if (action.type === 'isResetAction') {
    return action.payload;
  }
  return state;
}

export default isResetReducer;
