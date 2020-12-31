import initialState from './../../store/initialState.js';

const totalTimeReducer = (state = initialState.totalTime, action) => {
  if (action.type === 'totalTimeAction') {
    return action.payload;
  }
  return state;
}

export default totalTimeReducer;
