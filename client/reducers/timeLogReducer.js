import initialState from './../store/initialState.js';

const timeLogReducer = (state = initialState.timeLogState, action) => {
  if (action.type === 'Logging time') {
    return action.payload;
  }
  return state;
}

export default timeLogReducer;