import initialState from './../../store/initialState.js';

const threeMinWarningSoundReducer = (state = initialState.threeMinWarningSound, action) => {
  if (action.type === 'threeMinWarningSoundAction') {
    return action.payload;
  }
  return state;
}

export default threeMinWarningSoundReducer;
