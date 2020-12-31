import initialState from './../../store/initialState.js';

const isTickingReducer = (state = initialState.isTicking, action) => {
  if (action.type === 'isTickingAction') {
    return action.payload;
  }
  return state;
}

export default isTickingReducer;
