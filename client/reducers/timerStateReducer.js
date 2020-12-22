import initialState from './../store/initialState.js';

const timerStateReducer = (state = initialState.timerState, action) => {
  if (action.type === 'Save timer state') {
    return action.payload;
  }
  return state;
}

export default timerStateReducer;