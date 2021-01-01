import initialState from './../../store/initialState.js';

const willLogTimeReducer = (state = false, action) => {
  if (action.type === 'willLogTimeAction') {
    return action.payload;
  }
  return state;
}

export default willLogTimeReducer;
