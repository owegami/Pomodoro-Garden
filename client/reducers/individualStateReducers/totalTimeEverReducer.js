import initialState from './../../store/initialState.js';

const totalTimeEverReducer = (state = initialState.totalTimeEver, action) => {
  if (action.type === 'totalTimeEverAction') {
    return action.payload;
  }
  return state;
}

export default totalTimeEverReducer;
