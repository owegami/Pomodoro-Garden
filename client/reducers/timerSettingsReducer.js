import initialState from './../store/initialState.js';

const timerSettingsReducer = (state = initialState.timerSettingsState, action) => {
  if (action.type === 'Save timer settings') {
    return action.payload;
  }
  return state;
}

export default timerSettingsReducer;