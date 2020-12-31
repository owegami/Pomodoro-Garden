import initialState from './../../store/initialState.js';

const willLogTimeReducer = (state = initialState.willLogTime, action) => {
  if (action.type === 'willLogTimeAction') {
    return action.payload;
  }
  return state;
}

export default willLogTimeReducer;
