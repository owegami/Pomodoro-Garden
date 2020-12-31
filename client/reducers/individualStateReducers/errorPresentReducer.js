import initialState from './../../store/initialState.js';

const errorPresentReducer = (state = initialState.errorPresent, action) => {
  if (action.type === 'errorPresentAction') {
    return action.payload;
  }
  return state;
}

export default errorPresentReducer;